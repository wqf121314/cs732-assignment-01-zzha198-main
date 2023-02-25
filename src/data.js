import config from "./config/config";

const state = config.State;
const initialData = {
    Bugs: [{
        id: 1,
        state: state[0],
        title: "bug:Olive Ostrich",
        content: "Faucibus posuere proin lacus aliquam, amet i ac lectus lorem bibendum. Commodo eti in viverra lum au, euismod eu tempor.",
        consultant: "Leanne",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 2,
        state: state[1],
        title: "bug:Tangerine Tiger",
        content: "A erat euismod maximus orci hendrerit, en posuere risus ligula lum pulvinar arcu sollicitudin lacinia nisi diam cursus eti sodales.",
        consultant: "Edward",
        solver: "Bryd",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: [
            {
                state: state[0],
                createTime: "2022-03-21T09:18:56.797+00:00",
                content: [
                    {title: "ChangeTitle", msg: {org: 1111, now: 222}},
                    {title: "ChangeContent", msg: {org: "aaaa", now: "bbbb"}}
                ]
            },
            {
                state: state[0],
                createTime: "2022-03-21T09:18:56.797+00:00",
                content: [
                    {title: "changeTitle", msg: {org: 1111, now: 222}},
                    {title: "changeContent", msg: {org: "aaaa", now: "bbbb"}}
                ]
            },
            {
                state: state[0],
                createTime: "2022-03-21T09:18:56.797+00:00",
                content: [
                    {title: "changeTitle", msg: {org: 1111, now: 222}},
                    {title: "changeContent", msg: {org: "aaaa", now: "bbbb"}}
                ]
            },
            {
                state: state[0],
                createTime: "2022-03-21T09:18:56.797+00:00",
                content: [
                    {title: "changeTitle", msg: {org: 1111, now: 222}},
                    {title: "changeContent", msg: {org: "aaaa", now: "bbbb"}}
                ]
            },
            {
                state: state[0],
                createTime: "2022-03-21T09:18:56.797+00:00",
                content: [
                    {title: "changeTitle", msg: {org: 1111, now: 222}},
                    {title: "changeContent", msg: {org: "aaaa", now: "bbbb"}}
                ]
            }
        ]
    }, {
        id: 3,
        state: state[2],
        title: "bug:Deep Blue Duck",
        content: "Lorem quisque aliquam ante consequat sit dui el et purus.",
        consultant: "Haydee",
        solver: "Milligan",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 4,
        state: state[3],
        title: "bug:Hickory Horse",
        content: "Lacinia nulla in purus adipiscing. Augue ante massa mauris. E hendrerit gravida erat ultrices tincidunt, pellentesque sagittis tem con.",
        consultant: "Lyle",
        solver: "Mercer",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 5,
        state: state[4],
        title: "bug:Maroon Monkey",
        content: "Facilisis nulla iaculis maximus lorem erat pellentesque dictum dictum. Ex sapien risus sollicitudin gravida. Natoque maximus viverra.",
        consultant: "Shea",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 6,
        state: state[2],
        title: "bug:Ultramarine Unicorn",
        content: "Placerat in placerat a lectus tempor, mollis dignissim est diam. Vulputate a morbi tempor placerat est, dui turpis scelerisque aliquet.",
        consultant: "Curtis",
        solver: "Milligan",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 7,
        state: state[0],
        title: "bug:Sapphire Seal",
        content: "Ante cras it sollicitudin pharetra placerat accumsan in metus justo non dui pulvinar.",
        consultant: "Roselyn",
        solver: "Bryd",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 8,
        state: state[3],
        title: "bug:Aquamarine Aardvark",
        content: "Ac pulvinar arcu maximus vestibulum massa. El lectus eu lacinia donec e ante.",
        consultant: "Marcus",
        solver: "Chapman",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 9,
        state: state[2],
        title: "bug:Aquamarine Aardvark",
        content: "En tem finibus laoreet auctor imperdiet posuere. Imperdiet nunc non at tem aliquam tempor.",
        consultant: "Lyn",
        solver: "Keesee",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 10,
        state: state[3],
        title: "bug:Peach Panda",
        content: "Gravida velit scelerisque viverra metus u proin donec a cras ac tempor diam orci. Blandit aenean scelerisque sollicitudin.",
        consultant: "Lloyd",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 11,
        state: state[1],
        title: "bug:Tangerine Tiger",
        content: "Viverra en ligula enim nisl maximus aenean commodo, sagittis tincidunt maximus magna aenean condimentum non.",
        consultant: "Isabelle",
        solver: "Bryd",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 12,
        state: state[3],
        title: "bug:Ruby Rabbit",
        content: "Faucibus aliquet et aliquet con etiam eti imperdiet etiam etiam.",
        consultant: "Francis",
        solver: "Milligan",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 13,
        state: state[1],
        title: "bug:Tangerine Tiger",
        content: "Maximus facilisis vulputate est cit sit ipsum lectus aliquam, vehicula nibh suscipit vestibulum tem aliquet.",
        consultant: "Olivia",
        solver: "Keesee",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 14,
        state: state[2],
        title: "bug:Zucchini Zebra",
        content: "Enim eu a magna fringilla a est o viverra auctor.",
        consultant: "Roman",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 15,
        state: state[2],
        title: "bug:Jade Jackyl",
        content: "Ex sodales ornare ut aliquam, en en u laoreet, condimentum purus suscipit.",
        consultant: "Myong",
        solver: "Bryd",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 16,
        state: state[0],
        title: "bug:Tangerine Tiger",
        content: "Dia ac enim magna morbi facilisis consequat sit gravida aliquam lectus auctor, enim bibendum nisl justo elit vestibulum.",
        consultant: "Jamie",
        solver: "Milligan",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 17,
        state: state[4],
        title: "bug:Quartz Grey Quail",
        content: "Sodales mollis pharetra magna facilisis cursus tempus. Massa lacinia pharetra.",
        consultant: "Alexis",
        solver: "Chapman",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 18,
        state: state[1],
        title: "bug:Ruby Rabbit",
        content: "Cursus pellentesque sapien orci vestibulum. At suscipit pharetra diam tincidunt vulputate tempus ultricies consectetur sit ac pretium.",
        consultant: "Vernon",
        solver: "Mercer",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 19,
        state: state[3],
        title: "bug:Navy Blue Nighthawk",
        content: "Tempor gravida quisque quis eti u viverra eu risus nunc ultricies diam maximus finibus donec nulla.",
        consultant: "Chloe",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 20,
        state: state[4],
        title: "bug:White Wombat",
        content: "In laoreet a vestibulum cit. At dignissim sodales mi. Pharetra lacinia sapien.",
        consultant: "Max",
        solver: "Zobel",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 21,
        state: state[4],
        title: "bug:Fuchsia Frog",
        content: "Dolor euismod donec curabitur elementum turpis eu, el vitae augue commodo.",
        consultant: "Kirstie",
        solver: "Milligan",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 22,
        state: state[2],
        title: "bug:Emerald Elephant",
        content: "Adipiscing ipsum imperdiet dui imperdiet el. Nulla sit morbi amet in natoque, sodales ex id.",
        consultant: "Tyler",
        solver: "Zobel",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 23,
        state: state[4],
        title: "bug:Crimson Crab",
        content: "Con o iaculis nam dui. Erat viverra finibus nibh laoreet dignissim nisl.",
        consultant: "Katelin",
        solver: "Flinn",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 24,
        state: state[0],
        title: "bug:Violet Viper",
        content: "Sollicitudin nibh consectetur nibh dictum nunc magna eros aliquet sed.",
        consultant: "Alejandro",
        solver: "Keesee",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }, {
        id: 25,
        state: state[3],
        title: "bug:Fuchsia Frog",
        content: "Ipsum ultrices lobortis tem laoreet velit, aliquam posuere pretium tempus dui. Est lectus leo sagittis pretium aliquet.",
        consultant: "Hannah",
        solver: "Mercer",
        createTime: "2022-03-21T09:18:56.797+00:00",
        updateTime: "2022-03-26T19:32:43.127+00:00",
        timeline: []
    }]
}
export default initialData;