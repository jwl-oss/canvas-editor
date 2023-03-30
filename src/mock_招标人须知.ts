import { ControlType, ElementType, IEditorOption, IElement } from './editor'

export const data :IElement[] = [
    {
        "value": "第一部分 投标人须知",
        "font": "宋体",
        "size": 24,
        "bold": true,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "center",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "bold": true
    },
    {
        "value": "第一条 项目概况",
        "font": "宋体",
        "size": 16,
        "bold": true,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.1 工程名称：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n",
        "lock": true
    },
    {
        "value": "1.2 工程概况：建筑面积",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "m²，结构形式",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "，建筑檐高",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "米，地下",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "层，地上",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "层。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体"
    },
    {
        "value": "1.3 工程地点：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.4 设计单位（全称）：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.5 监理单位（全称）：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment"
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.6 现场状况",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.6.1临时设施情况：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "（如临时设施目前状态、以及相关责任条件等）；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.6.2机械配备情况：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "1.6.3影响造价的其他情况：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment"
    },
    {
        "value": "\n",
        "font": "宋体",
        "bold": true,
        "lock": true
    },
    {
        "value": "第二条 承包范围及其界线",
        "font": "宋体",
        "size": 16,
        "bold": true,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "2.1承包方式：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "（如扩大劳务、包清工、包工包料等）；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "2.2承包范围：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "（如主体结构施工，包括钢筋混凝土工程、模板工程、脚手架工程、分包范围内生产区临建等）；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "2.3工作界线：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "第三条 工期要求",
        "font": "宋体",
        "size": 16,
        "bold": true,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "3.1 总工工期：总日历天数为：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "天",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment"
    },
    {
        "value": "。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n                        "
    },
    {
        "value": "计划开工日期：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "年",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "月",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "日；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体"
    },
    {
        "value": "                        "
    },
    {
        "value": "计划竣工日期：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "年",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "月",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "日。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "3.2 节点工期：",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "rowMargin": 1
    },
    {
        "value": "（1）",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "     ",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1
    },
    {
        "value": "年",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "  月   日至    年   月   日完成      ；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1
    },
    {
        "value": "\n",
        "font": "宋体",
        "rowMargin": 1
    },
    {
        "value": "（2）",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "   年  月   日至    年   月   日完成    ；",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1
    },
    {
        "value": "\n",
        "font": "宋体",
        "rowMargin": 1
    },
    {
        "value": "（3）",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1,
        "lock": true
    },
    {
        "value": "   年  月   日至    年   月   日完成    。",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "rowFlex": "alignment",
        "rowMargin": 1
    },
    {
        "value": "\n",
        "font": "宋体",
        "bold": true
    },
    {
        "value": "第四条 作业工人人数",
        "font": "宋体",
        "size": 16,
        "bold": true,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "\n",
        "font": "宋体",
        "lock": true
    },
    {
        "value": "承包人根据工程需要向发包人提供作业人员共",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "名，其中",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "人于本合同签定之日起",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "日内进场。承包人向发包人提供的作业人员其自有成建制",
        "font": "宋体",
        "size": 16,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "lock": true
    }
]