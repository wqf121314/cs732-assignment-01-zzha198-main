import {Form, Input, Select, Tag} from "antd";
import config from "../../config/config"
import React from "react";

export function TitleForm() {
    return (<Form.Item
        name="title"
        label="Title"
    ><Input placeholder="Input title to search"/>
    </Form.Item>);
}

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

export function ContentForm() {
    return (<Form.Item
        name="content"
        label="Content"
    ><Input  placeholder="Input Content to search"/>
    </Form.Item>)
}

export function ConsultantForm() {
    return (<Form.Item
        name="consultant"
        label="Consultant"
    ><Input placeholder="Input consultant to search"/>
    </Form.Item>)
}

export function SolverForm() {
    return (<Form.Item
        name="solver"
        label="Solver"
    ><Input placeholder="Input solver to search"/>
    </Form.Item>)
}