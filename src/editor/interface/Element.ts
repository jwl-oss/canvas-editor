import { ControlComponent, ImageDisplay } from '../dataset/enum/Control'
import { ElementType } from '../dataset/enum/Element'
import { RowFlex } from '../dataset/enum/Row'
import { IBlock } from './Block'
import { ICheckbox } from './Checkbox'
import { IControl } from './Control'
import { IColgroup } from './table/Colgroup'
import { ITr } from './table/Tr'

export interface IElementBasic {
  id?: string;
  type?: ElementType;
  value: string;
  lock:boolean;
  catalogue:boolean;
  level:number;
}

export interface IElementStyle {
  font?: string;
  size?: number;
  width?: number;
  height?: number;
  bold?: boolean;
  color?: string;
  highlight?: string;
  italic?: boolean;
  underline?: boolean;
  strikeout?: boolean;
  rowFlex?: RowFlex;
  rowMargin?: number;
  letterSpacing?: number;
}

export interface ITableAttr {
  colgroup?: IColgroup[];
  trList?: ITr[];
}

export interface ITableElement {
  tdId?: string;
  trId?: string;
  tableId?: string;
}

export interface IHyperlinkElement {
  valueList?: IElement[];
  url?: string;
  hyperlinkId?: string;
}

export type ITable = ITableAttr & ITableElement

export interface ISuperscriptSubscript {
  actualSize?: number;
}

export interface ISeparator {
  dashArray?: number[];
}

export interface IControlElement {
  control?: IControl;
  controlId?: string;
  controlComponent?: ControlComponent;
  font?: string;
  size?: number;
  bold?: boolean;
  color?: string;
  rowFlex?: RowFlex;
  rowMargin?: number;
  lock?:boolean;
  catalogue?:boolean;
}

export interface ICheckboxElement {
  checkbox?: ICheckbox;
}

export interface ILaTexElement {
  laTexSVG?: string;
}

export interface IDateElement {
  dateFormat?: string;
  dateId?: string;
}

export interface IImageElement {
  imgDisplay?: ImageDisplay
}

export interface IBlockElement {
  block?: IBlock;
}

export type IElement = IElementBasic
  & IElementStyle
  & ITable
  & IHyperlinkElement
  & ISuperscriptSubscript
  & ISeparator
  & IControlElement
  & ICheckboxElement
  & ILaTexElement
  & IDateElement
  & IImageElement
  & IBlockElement

export interface IElementMetrics {
  width: number;
  height: number;
  boundingBoxAscent: number;
  boundingBoxDescent: number;
}

export interface IElementPosition {
  pageNo: number;
  index: number;
  value: string,
  rowNo: number;
  ascent: number;
  lineHeight: number;
  metrics: IElementMetrics;
  isLastLetter: boolean,
  coordinate: {
    leftTop: number[];
    leftBottom: number[];
    rightTop: number[];
    rightBottom: number[];
  }
}

export interface IElementFillRect {
  x: number;
  y: number;
  width: number;
  height: number;
}