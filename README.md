# Advice Management System
UI library project, a work task management system developed using Ant Design UI library. This demo is used to learn how
to use ANTD to complete front-end page development. We will focus on the usage of Layout, Form, Table, Descriptions and Timeline components.

The project view

![BugList Page](https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/main/productShow/BugList.png?token=GHSAT0AAAAAABSAZFKLZA7SBRTYUBQ5MRPOYSRQCWA)
![BugInfo Page](https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/main/productShow/BugInfo.png?token=GHSAT0AAAAAABSAZFKLKOFSCBXTMIVCHAAEYSRQGYQ)

## Learning note

### Install and Initialization

1. Before all start, we may need install yarn and related third-party components.

Initialization Project
```shell
yarn create react-app assignment-01-zzha198
yarn add react-router-dom
```
Installing dependent components
```shell
yarn add antd
yarn add @ant-design/icons
yarn add @craco/craco
yarn add craco-less
yarn add react-router-dom
yarn add use-persisted-state
```
2. Configure environment and base data

Create a craco.config.js at root directory of project for further overriding.
```js
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#285295' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
```
Modify react's startup parameter configuration
```json
// package.json
{
   ..., 
   
   "scripts":{
      "start": "craco start",
      "build": "craco build",
      "test": "craco test"
   }
}
```
Modify static file css file to less file
```less
// index.css >> index.less
@import '~antd/dist/antd.less';
html, body, #root {
  width: 100%;
  height: 100%;
}
```
- Create the [src/data.js](https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/blob/main/src/data.js) file as the project's data file.
- Create the [src/config/config.js](https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/blob/main/src/config/config.js) file as the project's configuration file.
- Create the [src/utils/AppContextProvider.js](https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/blob/main/src/utils/AppContextProvider.js) file as the global data context content support.

### Configure Project Routes and antd Layout to build applications
#### Routes
We use the react-router-dom component for the project's routing control. Configure the BrowserRouter routing component in the src/index.js file and, at the same time, configure the AppContextProvider global context to ask
```js
// src/index.js
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContextProvider>
                <App/>
            </AppContextProvider>
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
)
```
```js
// src/App.js
<Routes>
    <Route path="/" element={<PageLayout title={config.Title} tabs={config.Tabs}/>}>
        <Route index element={<Navigate to="/welcome"/>}/>
        <Route path="welcome" element={<Welcome title={config.Title}/>}/>

        <Route path="bugs" element={<Bug/>}>
            <Route index element={<Navigate to="./table"/>}/>
            <Route path="table" element={<BugTable/>}/>
            <Route path=":id" element={<BugView/>}/>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
    </Route>
</Routes>
```
#### Antd Layout component

[Layout](https://ant.design/components/layout/) component is the overall page level layout component of Antd. The Layout component contains 5 wrapper: Header, Sider, Content, Footer and Layout. Layout wrapper can be placed in any parent container.

In this project is a backend platform type project, so we use a kind of layout in the backend management system is more classic.
![Layout](https://raw.githubusercontent.com/UOA-CS732-SE750-Students-2022/assignment-01-zzha198/main/productShow/Layout.png?token=GHSAT0AAAAAABSAZFKKL3HCWQ3KWWURY54WYSRQDCQ)

We set the global layout in the PageLayout wrapper. This way the entire site will be populated with content from within this component.
```js
// src/pages/PageLayout.js
<Layout>
    <PageHeader title={title}/>
    <Layout style={{minHeight: '110vh'}}>
        <PageSide tabs={tabs}/>
        <Outlet/>
    </Layout>
    <PageFooter title={title}/>
</Layout>
```
Encapsulate the entire page inside this container through a main Layout container. 
- Set the Header information of the page through the PageHeader. In the Header container we can set the background color, the color of the font (backgroundColor: "#285295", color: "white") through the style tag.
- In the content of the page, we need to set the content of the sider on the left and the content on the right. First add Layout to divide the content into two parts: PageSide and Content (Content I use Outlet instead). In the PageSide container is mainly used to set the menu bar, we can simply get the tabs information from the config configuration, and then parse the menu.
```js
// src/components/PagaMain.js
<Sider style={{backgroundColor: "white"}}>
    <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['task']}
        style={{height: '100%', borderRight: 0}}>
        
        <SubMenu style={{fontSize: "large"}} key="task" icon={<ProfileOutlined/>} title="Task">
            {tabs.map(({title, to}) => (
                <Menu.Item key={title}>
                    <Link to={to}>{title}</Link>
                </Menu.Item>
            ))}
        </SubMenu>
    </Menu>
</Sider>
```
> Note:
> In Antd [Menu](https://ant.design/components/menu/) component, we need to set the overall style layout through the main Menu container, and then through the SubMenu container for each sub-menu design. 
> In the Menu component, we can also add icons to each menu via the icon tag.
- In the PageFooter container, just populate the site with information.

### Antd's Form and Table components used in bugs/table pages.
This section focuses on the application of Antd's Form and Table components, and also intersperses the use of Card and Tag components.

In the main Route to configure the overall style of the Bug page, this style will inherit the PageLayout layout of the Outlet. Therefore, in the Bug component need to mark this through the Content container is the global layout of the Content module. Then set the table route in the bug route to jump to the table page.
```js
// src/App.js
<Route path="bugs" element={<Bug/>}>
    ...
</Route>
```
```js
// src/pages/Bug/index.js
function Bug() {
    return (
        <Content>
            <Outlet/>
        </Content>);
}
```
The table page is guided by the routing component. table page mainly displays information about all bugs, and we can also search for some certain type of bugs.

The first thing that needs to be clear is that we can treat the table page as a separate page, so this page also needs a header. The navigation of the page can be set through the [PageHeader](https://ant.design/components/page-header/) container of antd. In the PageHeader container, we can set the page back by onBack (onBack={() => window.history.back()}) and indicate the content of this subpage by title (title="Bug").
```js
// src/pages/Bug/BugTable.js
<PageHeader
    className="site-page-header"
    onBack={() => window.history.back()}
    title="Bug"
>
    <SearchForm onChangeSearchData={e => onChangeSource(e)}/>
    <br/>
    <BugContent SourceData={sourceData}/>
</PageHeader>
```
We can clearly see that the bug/table page will be divided into two parts: SearchForm and BugContent. searchForm component is mainly used to submit search requests through the properties of the bug. bugContent component is responsible for the display of the content of the bug list.
#### Antd's Form Component
To make the style more beautiful, we wrap the entire content of the form in Antd's [Card](https://ant.design/components/card/) component. The card container can carry text, lists, images, paragraphs, etc. and is commonly used in backend overview pages.
```js
// src/components/Bug/SearchForm.js
<Card bordered={false} style={{margin: '0 15px'}}>
    <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Row gutter={[48, 16]}>
            <Col span={8}>
                <TitleForm/>
            </Col>
            <Col span={8}>
                <StateForm/>
            </Col>
            <Col span={8}>
                <ContentForm/>
            </Col>
            <Col span={8}>
                <ConsultantForm/>
            </Col>
            <Col span={8}>
                <SolverForm/>
            </Col>
        </Row>
        <Row>
            <Col span={24} style={{textAlign: 'right',}}>
                <Button type="primary" htmlType="submit">
                    Search
                </Button>
                <Button style={{margin: '0 8px'}} onClick={onReset}>
                    Clear
                </Button>
            </Col>
        </Row>
    </Form>
</Card>
```
Usually, [Form](https://ant.design/components/form/) are divided into two parts: the content-filled area and the button area. In the SearchForm component of the project, we also divided the Form expression into two parts by using Antd's Row tag. To enable the content of the form to be arranged according to certain rules, we also refer to the Row and Col containers for gridding. row and col are part of the [Grid](https://ant.design/components/grid/) component. In the grid system, we define the frame outside the information area based on rows and columns to ensure that each area has a stable alignment.

Antd's Form container is a high-performance form component with data range management. It includes data collection, validation and styles. Therefore, based on these features, Antd's Form container includes an onFinish function to submit the Form.

Based on the rules of the Antd Form, I declare an onChangeSource function in the ButTable component to get the query information in the Form, and then request the retrieveBugListByParams function defined in the AppContextProvider to get the query data and pass it to the BugContent container of the BugTable component.
```js
// src/pages/Bug/BugTable
function BugTable() {
    const {bugs, retrieveBugListByParams} = useContext(AppContext);
    const [sourceData, setSourceData] = useState(bugs)

    function onChangeSource(e) {
        const source = retrieveBugListByParams(e)
        setSourceData(source)
    }

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Bug"
        >
            <SearchForm onChangeSearchData={e => onChangeSource(e)}/>
            <br/>
            <BugContent SourceData={sourceData}/>
        </PageHeader>
    );
}
```
Special note is that in the SearchForm container, in addition to the Input container, in order to meet the business needs of multiple work order state query, we use the Select container in the StateForm container of Antd. the [Select](https://ant.design/components/select/) container can support the ability of multiple selection of labels, just set mode=" multiple" to meet the multi-select option. More than that, the Select container also supports Antd's tagging capability. We need to add the tagRender function to the tagRender property.

In the tagRender function we need to add mouse events to achieve the display effect after selecting the tag label. In Antd's [Tag](https://ant.design/components/tag/) component, the color of the tag can be displayed by setting the color, etc.
```js
// src/components/Bug/BugPage.js
function tagRender(props) {
    const {label, value, closable, onClose} = props;
    const color = config.State.find(s => s.value === value).color
    const onPreventMouseDown = event => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (<Tag
        color={color}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{marginRight: 3}}
    >
        {label}
    </Tag>);
}

export function StateForm() {
    return (<Form.Item name="state" label="State">
        <Select mode="multiple"
                placeholder="Select state to search"
                tagRender={tagRender}
        >
            {config.State.map(state => <Select.Option key={state.id} value={state.value}>{state.value}</Select.Option>)}
        </Select>
    </Form.Item>)
}
```
This completes our form capability for data queries on bug/table pages.

#### Antd's Table Component
Antd's [Table](https://ant.design/components/table/) component is a container for displaying row data. It can display a large amount of structured data, and it can also perform complex operations on the data such as sorting, searching, and paging. The columns property is used to display an array of header columns, the dataSource property is used to display form data, and the pagination property is used for paging.
```js
// src/components/Bug/BugContent.js
function BugContent({SourceData}) {
    return (
        <Card bordered={false} style={{margin: '0 15px'}}>
            <Table rowKey="id"
                   columns={columns}
                   dataSource={SourceData}
                   pagination={{pageSize: 10}}
                   scroll={{x: 1500, y: 480}}/>
        </Card>
    );
}
```
To give some columns of the form the ability to be fixed, I made this column fixed on the left side by defining the fixed field as left in the columns object. Moreover, it is also possible to add more properties to the column display. With the render parameter, I added a jump link to the Title field and a tagging style to the Stage field.
```js
// src/components/Bug/ButTable.js
export const columns = [
    ...
        {
            title: 'Title',
            width: 150,
            dataIndex: 'title',
            key: 'title',
            fixed: 'left',
            render: (title, bug) => <Link to={`/bugs/${bug.id}`}>{title}</Link>
        },
    {
        title: 'State',
        width: 80,
        dataIndex: 'state',
        key: 'state',
        render: state => (
            <Tag color={state.color} key={state.key}>
                {state.value}
            </Tag>),
    },
    ...
]
```

### Antd's Timeline components used in bugs/:id pages.
Since the usage of the Form component has been introduced in the table page, the bugView page will focus on the usage of the [Timeline](https://ant.design/components/timeline/) component.

In the business scenario, when the user makes a change to the content of the bug, a change record is generated. This change record will record the original content and the modified content. The Timeline component is referenced in the BugView component.
```js
// src/pages/Bug/BugView.js
return (
    <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={bugInfo.title}
    >
        <BugInfo bugInfo={bugInfo} onChangeBug={e => onChangeBug(e)}/>
        {bugInfo.timeline.length > 0 ? <BugTimeline bugInfo={bugInfo}/> : null}
    </PageHeader>
);
```
#### Antd's TimeLine Component
The Timeline component is used to display timeline information vertically, in chronological order in series. In the project, we wrap the timeline through Card container and split the bug information and timeline information through Divider. I perform the wrapping of the timeline component through the ShowTimeline function.
```js
// src/components/Bug/BugTimeline.js
function ShowTimeline({timeline}) {
    return (<Timeline style={{width: 200}} mode={"left"}>
        {timeline.map((item, index) => (<Timeline.Item key={index}
                                                       label={moment(item.createTime).format("MMM DD yyyy HH:mm:ss")}
                                                       color={item.state.color}>
            {item.content.map((c, index) => (
                <Descriptions title={c.title} column={2} key={index} style={{width: 800}}>
                    <Descriptions.Item label="Before Modification" span={2}>{c.msg.org}</Descriptions.Item>
                    <Descriptions.Item label="After Modification" span={2}>{c.msg.now}</Descriptions.Item>
                </Descriptions>))}
        </Timeline.Item>))}
    </Timeline>);
}

function BugTimeline({bugInfo}) {
    return (<Card style={{margin: '0 15px'}}>
        <Divider orientation="left">Timeline</Divider>
        <ShowTimeline timeline={bugInfo.timeline}/>
    </Card>);
}
```
By referencing the Timeline container we can display the timeline style. Timeline has many modes in Antd, and we can define the display style by mode. we can set the display information of each timeline in Timeline. In the project, we can display the modification time information of the bug information through the property of table, and the current status of the bug through the property of color. In the display of the modified information, I also control the display style through the [Descriptions](https://ant.design/components/descriptions/#header) container. As we can see from the project, there are two columns of information displayed through the Descriptions container, and the title attribute displays the content of the modified bug attributes. Item container to display the content of the bug information before and after modification.





