import { ControlType, ElementType, IEditorOption, IElement } from './editor'

// export const data :IElement[] = [
//     {
//         "value": "",
//         "type": "separator",
//         "rowFlex": "center",
//         "dashArray": [
//             1
//         ],
//         "width": 554
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "宋体",
//         "size": 56,
//         "rowFlex": "center",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "XXX项目",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n",
//         "rowFlex": "right",
//         "rowMargin": 2
//     },
//     {
//         "value": "",
//         "type": "control",
//         "rowFlex": "right",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "xxx号<2021>xxx号",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n",
//         "font": "宋体",
//         "size": 29,
//         "rowFlex": "center",
//         "rowMargin": 3
//     },
//     {
//         "value": "",
//         "type": "control",
//         "rowFlex": "center",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "关于xxxxxxx的报告/请示",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n",
//         "font": "仿宋",
//         "size": 21,
//         "rowMargin": 2
//     },
//     {
//         "value": "",
//         "type": "control",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "单位名称",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "：",
//         "font": "仿宋",
//         "size": 21,
//         "rowMargin": 2,
//         "lock": true
//     },
//     {
//         "value": "\n       ",
//         "font": "仿宋",
//         "size": 21,
//         "rowMargin": 1
//     },
//     {
//         "value": "",
//         "type": "control",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "请输入正文",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n\n\n\n\n\n"
//     },
//     {
//         "value": "联系人：",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "lock": true
//     },
//     {
//         "value": "\n",
//         "font": "仿宋",
//         "size": 21,
//         "lock": true
//     },
//     {
//         "value": "电话：",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "lock": true
//     },
//     {
//         "value": "\n",
//         "font": "仿宋",
//         "size": 21,
//         "lock": true
//     },
//     {
//         "value": "附件：",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "lock": true
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "仿宋",
//         "size": 21,
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "1.XXXXX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n              "
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "仿宋",
//         "size": 21,
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "2.XXXXX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n              "
//     },
//     {
//         "value": "\n\n",
//         "rowFlex": "right"
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "仿宋",
//         "size": 21,
//         "rowFlex": "right",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "XXX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "\n ",
//         "rowFlex": "right"
//     },
//     {
//         "value": "",
//         "type": "control",
//         "rowFlex": "right",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "XXXX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "年",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "rowFlex": "right",
//         "lock": true
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "仿宋",
//         "size": 21,
//         "rowFlex": "right",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "XX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "月",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "rowFlex": "right",
//         "lock": true
//     },
//     {
//         "value": "",
//         "type": "control",
//         "font": "仿宋",
//         "size": 21,
//         "rowFlex": "right",
//         "control": {
//             "type": "text",
//             "value": [],
//             "placeholder": "XX",
//             "prefix": " ",
//             "postfix": " "
//         }
//     },
//     {
//         "value": "日",
//         "font": "仿宋",
//         "size": 21,
//         "bold": false,
//         "color": "rgb(0, 0, 0)",
//         "italic": false,
//         "highlight": "rgb(255, 255, 255)",
//         "rowFlex": "right",
//         "lock": true
//     },
//     {
//         "value": "\n\n\n\n\n\n"
//     },
//     {
//         "value": "\n",
//         "type": "separator",
//         "dashArray": [
//             1
//         ],
//         "width": 554
//     }
// ]

export const data :IElement[] = [
    {
        "value": "",
        "type": "separator",
        "rowFlex": "center",
        "dashArray": [
            1
        ],
        "width": 554
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "rowFlex": "center",
        "font": "宋体",
        "size": 32,
        "bold": true,
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "XXX项目",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n",
        "rowFlex": "right",
        "rowMargin": 2
    },
    {
        "value": "",
        "type": "control",
        "font": "仿宋",
        "size": 21,
        "color": "#000000",
        "rowFlex": "right",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "xxx号<2021>xxx号",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n",
        "rowFlex": "center",
        "rowMargin": 3
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "rowFlex": "center",
        "size": 29,
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "关于XXXXXXX的报告/请示",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n",
        "font": "仿宋",
        "size": 21,
        "rowMargin": 2
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "font": "仿宋",
        "size": 21,
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "单位名称",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "：",
        "font": "仿宋",
        "size": 21,
        "rowMargin": 2,
        "lock": true
    },
    {
        "value": "\n       ",
        "font": "仿宋",
        "size": 21,
        "rowMargin": 1
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "font": "仿宋",
        "size": 21,
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "请输入正文",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n\n\n\n\n\n"
    },
    {
        "value": "联系人：",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "lock": true
    },
    {
        "value": "\n",
        "font": "仿宋",
        "size": 21,
        "lock": true
    },
    {
        "value": "电话：",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "lock": true
    },
    {
        "value": "\n",
        "font": "仿宋",
        "size": 21,
        "lock": true
    },
    {
        "value": "附件：",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "1.XXXXX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n      ",
        "font": "仿宋",
        "size": 21
    },
    {
        "value": "",
        "type": "control",
        "font": "仿宋",
        "size": 21,
        "color": "#000000",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "2.XXXXX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n              "
    },
    {
        "value": "\n\n",
        "rowFlex": "right"
    },
    {
        "value": "",
        "type": "control",
        "font": "仿宋",
        "size": 21,
        "color": "#000000",
        "rowFlex": "right",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "XXX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "\n ",
        "rowFlex": "right"
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "XXXX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "年",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "rowFlex": "right",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "XX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "月",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "rowFlex": "right",
        "lock": true
    },
    {
        "value": "",
        "type": "control",
        "color": "#000000",
        "control": {
            "type": "text",
            "value": [],
            "placeholder": "XX",
            "prefix": " ",
            "postfix": " "
        }
    },
    {
        "value": "日",
        "font": "仿宋",
        "size": 21,
        "bold": false,
        "color": "rgb(0, 0, 0)",
        "italic": false,
        "highlight": "rgb(255, 255, 255)",
        "rowFlex": "right",
        "lock": true
    },
    {
        "value": "\n\n\n\n\n\n"
    },
    {
        "value": "\n",
        "type": "separator",
        "dashArray": [
            1
        ],
        "width": 554
    }
]
