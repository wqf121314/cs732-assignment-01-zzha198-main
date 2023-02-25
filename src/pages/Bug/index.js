import {Content} from "antd/es/layout/layout";
import {Outlet} from "react-router-dom";

function Bug() {
    return (
        <Content>
            <Outlet/>
        </Content>);
}

export default Bug;