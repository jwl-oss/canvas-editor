import { IRowElement } from '../../../interface/Row'
export class SeparatorParticle {

  public render(ctx: CanvasRenderingContext2D, element: IRowElement, x: number, y: number) {
    ctx.save()
    if (element.color) {
      ctx.strokeStyle = element.color
    }
    if(element.dashArray[0] == 1){
      ctx.translate(0, 0.5) // 从1处渲染，避免线宽度等于3
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + element.width!, y)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y+3.5)
      ctx.lineTo(x + element.width!, y+3.5)
      ctx.lineWidth = 2.6
      ctx.stroke()
      ctx.restore()
    }else{

    if (element.dashArray && element.dashArray.length) {
      ctx.setLineDash(element.dashArray)
    }
    ctx.translate(0, 0.5) // 从1处渲染，避免线宽度等于3
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + element.width!, y)
    ctx.stroke()
    ctx.restore()
  }
  }

}