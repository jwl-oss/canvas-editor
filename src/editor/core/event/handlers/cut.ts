import { writeElementList } from '../../../utils/clipboard'
import { CanvasEvent } from '../CanvasEvent'

export function cut(host: CanvasEvent) {
  const draw = host.getDraw()
  const rangeManager = draw.getRange()
  const position = draw.getPosition()
  const cursorPosition = position.getCursorPosition()
  if (!cursorPosition) return
  const { index } = cursorPosition
  const { startIndex, endIndex } = rangeManager.getRange()
  if (!~startIndex && !~startIndex) return
  const isReadonly = draw.isReadonly()
  if (isReadonly) return
  const control = draw.getControl()
  const isPartRangeInControlOutside = control.isPartRangeInControlOutside()
  if (isPartRangeInControlOutside) return
  const activeControl = control.getActiveControl()
  const elementList = draw.getElementList()
  let start = startIndex
  let end = endIndex
  if(elementList[index].lock){
    return
  }
  // 无选区则剪切一行
  if (startIndex === endIndex) {
    debugger
    const position = draw.getPosition()
    const positionList = position.getPositionList()
    const startPosition = positionList[startIndex]
    const curRowNo = startPosition.rowNo
    const curPageNo = startPosition.pageNo
    const cutElementIndexList: number[] = []
    for (let p = 0; p < positionList.length; p++) {
      const position = positionList[p]
      if (position.pageNo > curPageNo) break
      if (position.pageNo === curPageNo && position.rowNo === curRowNo) {
        cutElementIndexList.push(p)
      }
    }
    const firstElementIndex = cutElementIndexList[0] - 1
    start = firstElementIndex < 0 ? 0 : firstElementIndex
    end = cutElementIndexList[cutElementIndexList.length - 1]
  }
  const options = draw.getOptions()
  // 写入粘贴板
  writeElementList(elementList.slice(start + 1, end + 1), options)
  let curIndex: number
  if (activeControl) {
    curIndex = control.cut()
  } else {
    elementList.splice(start + 1, end - start)
    curIndex = start
  }
  rangeManager.setRange(curIndex, curIndex)
  draw.render({ curIndex })
}