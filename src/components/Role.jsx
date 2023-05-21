import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import HomePage from '../routes/Home/HomePage';
import SoundSet from '../routes/sound-setting/SetSound'
import AddSound from '../routes/sound-setting/AddSound'
import InfoPlace from '../routes/infomation-place/InfoPlace'
import Report from '../routes/report/Report';
import SetAdmin from '../routes/Set-Customer-and-Admin/SetAdmin';
import SetCustomer from '../routes/Set-Customer-and-Admin/SetCustomer';
import SideBarUser from './SideBarUser';
import '../index.css';
import UpdateOrganization from "../routes/infomation-place/UpdateOrganization";
import Cookies from 'js-cookie';
import Menubar from "./Menubar";
function Role({ admin, user }) {
    const report = Cookies.get('report');
    const settingDevice = Cookies.get('settingDevice');
    const settingUser = Cookies.get('settingUser');
    const simulationMode = Cookies.get('simulationMode');
    const viewer = Cookies.get('viewer');
    console.log(report);
    console.log(settingDevice);
    console.log(settingUser);
    console.log(simulationMode);
    console.log(viewer);
    if (window.location.pathname == "/") {
        return <><LoginPage /></>
    }
    return (
        <>
            <Menubar />
            {admin ? <>
                <Sidebar />
                <Routes>
                    <Route path="SoundSet" element={<SoundSet />} />
                    <Route path="SoundSet/AddSound" element={<AddSound />} />
                    <Route path="Report" element={<Report />} />
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="Locationinformation" element={<InfoPlace />} />
                    <Route path="Locationinformation/UpdateOrganization" element={<UpdateOrganization />} />
                    <Route path="InformationUserSet" element={<SetAdmin />} />
                    <Route path="InformationCustomerSet" element={<SetCustomer />} />
                </Routes>
            </> : <></>}
            {user ? <>
                <SideBarUser />
                <Routes>
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="SoundSet" element={<SoundSet />} />
                    <Route path="SoundSet/AddSound" element={<AddSound />} />
                    <Route path="Report" element={<Report />} />
                </Routes>
            </> : <></>}

        </>
    );
}
export default Role;