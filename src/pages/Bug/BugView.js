import {useParams} from "react-router-dom";
import {PageHeader} from "antd";
import BugInfo from "../../components/Bug/BugInfo";
import BugTimeline from "../../components/Bug/BugTimeline";
import {useContext, useState} from "react";
import {AppContext} from "../../utils/AppContextProvider";


function BugView() {
    const {retrieveBugListByID, updateBugs} = useContext(AppContext);
    const {id} = useParams();
    const [bugInfo, setBugInfo] = useState(retrieveBugListByID(id));

    function onChangeBug(e) {
        setBugInfo(e)
        updateBugs(e)
    }

    return (
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title={bugInfo.title}
        >
            <BugInfo bugInfo={bugInfo} onChangeBug={e => onChangeBug(e)}/>
            {bugInfo.timeline.length > 0 ? <BugTimeline bugInfo={bugInfo}/> : null}
        </PageHeader>
    );
}


export default BugView;