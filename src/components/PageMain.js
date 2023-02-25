import {Layout, Menu} from 'antd';
import {ProfileOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Footer} from "antd/es/layout/layout";

const {Header, Sider} = Layout;
const {SubMenu} = Menu;

export function PageHeader({title}) {
    return (
        <Header style={{backgroundColor: "#285295", color: "white"}}>
            <div style={{fontSize: "xx-large"}}>{title}</div>
        </Header>
    )
}

export function PageSide({tabs}) {
    return (
        <Sider style={{backgroundColor: "white"}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['task']}
                style={{height: '100%', borderRight: 0}}
            >
                <SubMenu style={{fontSize: "large"}} key="task" icon={<ProfileOutlined/>} title="Task">
                    {tabs.map(({title, to}) => (
                        <Menu.Item key={title}>
                            <Link to={to}>{title}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export function PageFooter({title}) {
    return (
        <Footer style={{textAlign: 'center'}}>{title} (Antd practice) ©2022 Created by Chris Zhao</Footer>
    )
}