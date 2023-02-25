import {Tag} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";

export const columns = [
    {
        title: 'Id',
        width: 50,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
    },
    {
        title: 'Title',
        width: 150,
        dataIndex: 'title',
        key: 'title',
        fixed: 'left',
        render: (title, bug) => <Link to={`/bugs/${bug.id}`}>{title}</Link>
    },
    {
        title: 'Content',
        width: 330,
        dataIndex: 'content',
        key: 'content',
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
    {
        title: 'Consultant',
        width: 100,
        dataIndex: 'consultant',
        key: 'consultant',
    },
    {
        title: 'Solver',
        width: 100,
        dataIndex: 'solver',
        key: 'solver',
    },
    {
        title: 'CreateTime',
        width: 100,
        dataIndex: 'createTime',
        key: 'createTime',
        render: time => (
            moment(time).add(Math.random() * 100, 'hours').format("MMM DD yyyy HH:mm:ss")
        )
    },
    {
        title: 'UpdateTime',
        width: 100,
        dataIndex: 'updateTime',
        key: 'updateTime',
        render: time => (
            moment(time).add(Math.random() * 100, 'hours').format("MMM DD yyyy HH:mm:ss")
        )
    }
];
