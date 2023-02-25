import React, {useContext, useState} from 'react';
import {PageHeader} from "antd";
import SearchForm from "../../components/Bug/SearchForm";
import BugContent from "../../components/Bug/BugContent";
import {AppContext} from "../../utils/AppContextProvider";

function BugTable() {
    const {bugs, retrieveBugListByParams} = useContext(AppContext);
    const [sourceData, setSourceData] = useState(bugs)

    function onChangeSource(e) {
        const source = retrieveBugListByParams(e)
        setSourceData(source)
    }

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="Bug"
        >
            <SearchForm onChangeSearchData={e => onChangeSource(e)}/>
            <br/>
            <BugContent SourceData={sourceData}/>
        </PageHeader>
    );
}

export default BugTable;