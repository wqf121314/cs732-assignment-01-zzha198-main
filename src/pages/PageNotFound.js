import React from 'react';
import {Content} from "antd/es/layout/layout";
import {Typography} from "antd";

function PageNotFound() {
    return (
        <Content>
            <Typography.Title level={1} style={{
                position: "absolute",
                top: "20%",
                left: "20%"
            }}>
                404
                <br/>
                Page Not Found
            </Typography.Title>
        </Content>
    );
}

export default PageNotFound;