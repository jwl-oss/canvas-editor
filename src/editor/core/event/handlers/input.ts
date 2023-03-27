import { ZERO } from '../../../dataset/constant/Common'
import { EDITOR_ELEMENT_COPY_ATTR } from '../../../dataset/constant/Element'
import { ElementType } from '../../../dataset/enum/Element'
import { IElement } from '../../../interface/Element'
import { splitText } from '../../../utils'
import { CanvasEvent } from '../CanvasEvent'

export function input(data: string, host: CanvasEvent) {
  const draw = host.getDraw()
  const isReadonly = draw.isReadonly()
  if (isReadonly) return
  const position = draw.getPosition()
  const cursorPosition = position.getCursorPosition()
  const elementList = draw.getElementList()
  if (!data || !cursorPosition) return
  const { index } = cursorPosition
  const control = draw.getControl()
  if (control.isPartRangeInControlOutside()) {
    // 忽略选区部分在控件的输入
    return
  }
  //固定区域，无法输入
  if(elementList[index].lock || elementList[index+1].lock){
    return
  }
  const isComposing = host.isComposing
  // 移除合成输入
  if (!isComposing) {
    const cursor = draw.getCursor()
    cursor.clearAgentDomValue()
  } else {
    removeComposingInput(host)
  }
  const activeControl = control.getActiveControl()
  const { TEXT, HYPERLINK, SUBSCRIPT, SUPERSCRIPT, DATE } = ElementType
  const text = data.replaceAll(`\n`, ZERO)
  const rangeManager = draw.getRange()
  const { startIndex, endIndex } = rangeManager.getRange()
  // 表格需要上下文信息
  const positionContext = position.getPositionContext()
  let restArg = {}
  if (positionContext.isTable) {
    const { tdId, trId, tableId } = positionContext
    restArg = { tdId, trId, tableId }
  }
  const element = elementList[endIndex]
  const inputData: IElement[] = splitText(text).map(value => {
    const newElement: IElement = {
      value,
      ...restArg
    }
    const nextElement = elementList[endIndex + 1]
    if (
      element.type === TEXT
      || (!element.type && element.value !== ZERO)
      || (element.type === HYPERLINK && nextElement?.type === HYPERLINK)
      || (element.type === DATE && nextElement?.type === DATE)
      || (element.type === SUBSCRIPT && nextElement?.type === SUBSCRIPT)
      || (element.type === SUPERSCRIPT && nextElement?.type === SUPERSCRIPT)
    ) {
      EDITOR_ELEMENT_COPY_ATTR.forEach(attr => {
        const value = element[attr] as never
        if (value !== undefined) {
          newElement[attr] = value
        }
      })
    }
    if (isComposing) {
      newElement.underline = true
    }
    return newElement
  })
  // 控件-移除placeholder
  let curIndex: number
  if (activeControl && !control.isRangInPostfix()) {
    curIndex = control.setValue(inputData)
  } else {
    const start = startIndex + 1
    if (startIndex !== endIndex) {
      elementList.splice(start, endIndex - startIndex)
    }
    // 禁止直接使用解构存在性能问题
    for (let i = 0; i < inputData.length; i++) {
      elementList.splice(start + i, 0, inputData[i])
    }
    curIndex = startIndex + inputData.length
  }
  if (~curIndex) {
    rangeManager.setRange(curIndex, curIndex)
    draw.render({
      curIndex,
      isSubmitHistory: !isComposing
    })
  }
  if (isComposing) {
    host.compositionInfo = {
      elementList,
      value: text,
      startIndex: curIndex - inputData.length,
      endIndex: curIndex
    }
  }
}

export function removeComposingInput(host: CanvasEvent) {
  if (!host.compositionInfo) return
  const { elementList, startIndex, endIndex } = host.compositionInfo
  elementList.splice(startIndex + 1, endIndex - startIndex)
  const rangeManager = host.getDraw().getRange()
  rangeManager.setRange(startIndex, startIndex)
  host.compositionInfo = null
}