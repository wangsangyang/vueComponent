<script>
const PRODUCT_TYPES = [
    {
        key: '0',
        title: '漫画',
        isShowSecond: false,
        source: [
            {
                key: '0',
                title: '腾讯漫画',
                active: false
            },
            {
                key: '1',
                title: '看漫画',
                active: false
            },
            {
                key: '2',
                title: 'KK漫画',
                active: false
            },
            {
                key: '3',
                title: '有妖气',
                active: false
            },
            {
                key: '4',
                title: '知音漫客',
                active: false
            },
            {
                key: '5',
                title: '漫漫',
                active: false
            },
            {
                key: '6',
                title: '网易',
                active: false
            }
        ],
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ]
    },
    {
        key: '1',
        title: '动漫',
        isShowSecond: false,
        source: [
            {
                key: '5',
                title: '腾讯动漫',
                active: false
            },
            {
                key: '6',
                title: '爱奇艺动漫',
                active: false
            },
            {
                key: '7',
                title: 'bilibili',
                active: false
            },
        ],
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    },  
    {
        key: '2',
        title: '游戏',
        isShowSecond: false,
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    },
    {
        key: '3',
        title: '微博',
        isShowSecond: false,
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    },
    {
        key: '4',
        title: '小说',
        isShowSecond: false,
        source: [
            {
                key: '3',
                title: '17K小说网',
                active: false
            },
            {
                key: '4',
                title: '起点中文',
                active: false
            }
        ],
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    },
    {
        key: '5',
        title: '电影',
        isShowSecond: false,
        source: [
            {
                key: '9',//9,（原来是0）
                title: '优酷',
                active: false
            },
            {
                key: '1',
                title: '爱奇艺',
                active: false
            },
            {
                key: '10',//10,(原来是2)
                title: 'bilibili',
                active: false
            },
            {
                key: '3',
                title: '腾讯视频',
                active: false
            },
            {
                key: '8',//8,（原来是4）
                title: '搜狐影音',
                active: false
            },
        ],
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    },
    {
        key: '6',
        title: '虚拟偶像',
        isShowSecond: false,
        tags: [
            {
                key: '0',
                title: '热血',
                active: false
            },
            {
                key: '1',
                title: '恋爱',
                active: false
            },
            {
                key: '2',
                title: '耽美',
                active: false
            },
            {
                key: '3',
                title: '爆笑',
                active: false
            },
            {
                key: '4',
                title: '日常',
                active: false
            },
            {
                key: '5',
                title: '都市',
                active: false
            },
            {
                key: '6',
                title: '青春',
                active: false
            },
            {
                key: '7',
                title: '恐怖',
                active: false
            },
            {
                key: '8',
                title: '幻想',
                active: false
            },
            {
                key: '9',
                title: '历史',
                active: false
            },
            {
                key: '10',
                title: '穿越',
                active: false
            },
            {
                key: '11',
                title: '魔幻',
                active: false
            },
            {
                key: '12',
                title: '生活',
                active: false
            },
            {
                key: '13',
                title: '科幻',
                active: false
            },
            {
                key: '14',
                title: '推理',
                active: false
            },
            {
                key: '15',
                title: '同人',
                active: false
            },
            {
                key: '16',
                title: '战斗',
                active: false
            },
            {
                key: '17',
                title: '古风',
                active: false
            },
            {
                key: '18',
                title: '校园',
                active: false
            },
            {
                key: '19',
                title: '异能',
                active: false
            },
            {
                key: '20',
                title: '悬疑',
                active: false
            },
            {
                key: '21',
                title: '虐心',
                active: false
            },
            {
                key: '22',
                title: '仙侠',
                active: false
            },
            {
                key: '23',
                title: '猎奇',
                active: false
            },
            {
                key: '24',
                title: '宠物',
                active: false
            },
            {
                key: '25',
                title: '机甲',
                active: false
            },
            {
                key: '26',
                title: '游戏',
                active: false
            },
            {
                key: '27',
                title: '百合',
                active: false
            },
            {
                key: '28',
                title: '烧脑',
                active: false
            },
            {
                key: '29',
                title: '宫廷',
                active: false
            },
            {
                key: '30',
                title: '重口',
                active: false
            },
            {
                key: '31',
                title: '美食',
                active: false
            }, 
            {
                key: '999',
                title: '其他',
                active: false
            }
        ],
    }
];

export default {PRODUCT_TYPES}

</script>

