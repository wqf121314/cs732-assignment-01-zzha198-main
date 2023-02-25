import {Routes, Route, Navigate} from 'react-router-dom';
import config from "./config/config"
import PageLayout from "./pages/PageLayout";
import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/PageNotFound";
import Bug from "./pages/Bug";
import BugTable from "./pages/Bug/BugTable";
import BugView from "./pages/Bug/BugView";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout title={config.Title} tabs={config.Tabs}/>}>
                <Route index element={<Navigate to="/welcome"/>}/>
                <Route path="welcome" element={<Welcome title={config.Title}/>}/>

                <Route path="bugs" element={<Bug/>}>
                    <Route index element={<Navigate to="./table"/>}/>
                    <Route path="table" element={<BugTable/>}/>
                    <Route path=":id" element={<BugView/>}/>
                </Route>

                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
