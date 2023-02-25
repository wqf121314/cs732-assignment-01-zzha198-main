import {Layout} from 'antd';
import {Outlet} from 'react-router-dom';
import {PageFooter, PageHeader, PageSide} from "../components/PageMain";


function PageLayout({title, tabs}) {
    return (
        <Layout>
            <PageHeader title={title}/>
            <Layout style={{minHeight: '80vh'}}>
                <PageSide tabs={tabs}/>
                <Outlet/>
            </Layout>
            <PageFooter title={title}/>
        </Layout>
    );
}

export default PageLayout;