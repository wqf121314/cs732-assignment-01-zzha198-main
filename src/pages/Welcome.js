import {Content} from "antd/es/layout/layout";
import {Typography} from "antd";


function Welcome({title}) {
    return (
        <Content>
            <Typography.Title level={1} style={{
                position: "absolute",
                top: "20%",
                left: "20%"
            }}>
                <img src="./img/Welcome.png" alt="welcome"/>
                Welcome To {title}
            </Typography.Title>
        </Content>
    );
}

export default Welcome;