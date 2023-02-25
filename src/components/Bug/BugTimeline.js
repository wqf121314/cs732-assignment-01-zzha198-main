import React from 'react';
import {Card, Descriptions, Divider, Timeline} from "antd";
import moment from "moment";

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

export default BugTimeline;