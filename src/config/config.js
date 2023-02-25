/**
 *
 * @type {{navbarTabs: [{to: string, title: string},{to: string, title: string},{to: string, title: string}]}}
 */
const configData = {
    Title: "Advice Management System",
    Tabs: [
        {title: 'Bug', to: '/bugs'},
    ],
    State: [
        {value: 'new', id: 1, color: 'green'},
        {value: 'open', id: 2, color: 'cyan'},
        {value: 'handing', id: 3, color: 'orange'},
        {value: 'fixed', id: 4, color: 'magenta'},
        {value: 'close', id: 5, color: 'blue'},
    ]
}

export default configData;