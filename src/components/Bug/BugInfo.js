import React, {useState} from 'react';
import {Card, Descriptions, Input, Select, Switch, Tag} from "antd";
import moment from "moment";
import config from "../../config/config";


function BugInfo({bugInfo, onChangeBug}) {
    const [isEdit, setIsEdit] = useState(false)

    function Edit({isEdit, onChangeEdit}) {
        return (
            <Switch checkedChildren="Edit" unCheckedChildren="View" defaultChecked={isEdit}
                    onClick={() => onChangeEdit(!isEdit)}/>
        )
    }

    function onStateChange(value) {
        const timeline = bugInfo.timeline;
        const newState = config.State.find(a => a.value === value)
        timeline.push({
            state: newState,
            createTime: new Date().toUTCString(),
            content: [
                {
                    title: "Change: State",
                    msg: {org: bugInfo.state.value, now: value}
                },
            ]
        },)
        onChangeBug({...bugInfo, ["state"]: newState});
    }

    function StateForm({state}) {
        return (
            <Select name="state" defaultValue={state.value} style={{width: 120}} onChange={onStateChange}>
                {config.State.map(s => <Select.Option key={s.id} value={s.value}>{s.value}</Select.Option>)}
            </Select>
        )
    }

    function onChangeProperty(property) {
        const {name, value} = property.target;

        const timeline = bugInfo.timeline;
        timeline.push({
            state: bugInfo.state,
            createTime: new Date().toUTCString(),
            content: [
                {
                    title: "Change: " + name.replace(name[0], name[0].toUpperCase()),
                    msg: {org: bugInfo[name], now: value}
                },
            ]
        },)
        onChangeBug({...bugInfo, [name]: value, "timeline": timeline})
    }

    return (<Card bordered={false} style={{margin: '0 15px'}}>
        <Descriptions title={`ID: ${bugInfo.id}`}
                      layout="horizontal"
                      column={2}
                      bordered
                      extra={<Edit isEdit={isEdit} onChangeEdit={e => setIsEdit(e)}/>}
        >
            <Descriptions.Item label="Title" span={2}>
                {isEdit ? <Input name="title" allowClear defaultValue={bugInfo.title}
                                 onBlur={e => (onChangeProperty(e))}/> : bugInfo.title}
            </Descriptions.Item>
            <Descriptions.Item label="Consultant">
                {isEdit ? <Input name="consultant" allowClear defaultValue={bugInfo.consultant}
                                 onBlur={e => (onChangeProperty(e))}/> : bugInfo.consultant}
            </Descriptions.Item>
            <Descriptions.Item label="Solver">
                {isEdit ? <Input name="solver" allowClear defaultValue={bugInfo.solver}
                                 onBlur={e => (onChangeProperty(e))}/> : bugInfo.solver}
            </Descriptions.Item>
            <Descriptions.Item label="State" span={2}>
                {isEdit ? <StateForm state={bugInfo.state}/> :
                    <Tag color={bugInfo.state.color}>
                        {bugInfo.state.value}
                    </Tag>}
            </Descriptions.Item>
            <Descriptions.Item label="CreateTime">
                {moment(bugInfo.createTime).format("MMM DD yyyy HH:mm:ss")}
            </Descriptions.Item>
            <Descriptions.Item label="UpdateTime">
                {moment(bugInfo.updateTime).format("MMM DD yyyy HH:mm:ss")}
            </Descriptions.Item>
            <Descriptions.Item label="Content" span={2}>
                {isEdit ? <Input.TextArea name="content" allowClear
                                          autoSize={{minRows: 3, maxRows: 10}}
                                          defaultValue={bugInfo.content}
                                          onBlur={e => (onChangeProperty(e))}/> : bugInfo.content}
            </Descriptions.Item>
        </Descriptions>
    </Card>);
}

export default BugInfo;