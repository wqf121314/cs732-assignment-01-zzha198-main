import {Card, Table} from 'antd';
import {columns} from "./BugTable";

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

export default BugContent;