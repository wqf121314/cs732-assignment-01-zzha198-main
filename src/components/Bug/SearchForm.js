import {Button, Card, Col, Form, Row} from "antd";
import {ConsultantForm, ContentForm, SolverForm, StateForm, TitleForm} from "./BugPage";
import React from "react";
import {useNavigate} from 'react-router-dom';


function SearchForm({onChangeSearchData}) {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        onChangeSearchData(values)
    };
    const onReset = () => {
        form.resetFields();
        localStorage.clear();
        navigate('/bugs');
    };
    return (<Card bordered={false} style={{margin: '0 15px'}}>
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
    </Card>);
}

export default SearchForm;