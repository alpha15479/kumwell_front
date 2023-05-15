import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import HomePage from '../routes/Home/HomePage';
import DetailOrganization from '../routes/DetailOrganization';
import SoundSet from '../routes/sound-setting/SetSound'
import AddSound from '../routes/sound-setting/AddSound'
import InfoPlace from '../routes/infomation-place/InfoPlace'
import Report from '../routes/report/Report';
import SetAdmin from '../routes/Set-Customer-and-Admin/SetAdmin';
import SetCustomer from '../routes/Set-Customer-and-Admin/SetCustomer';
import SideBarUser from './SideBarUser';
import '../index.css';
import Cookies from 'js-cookie';
function Role({ admin, user }) {
    if(window.location.pathname == "/"){
        return <><LoginPage/></>
     }
    return (
        <>
            {admin ? <>
                <Sidebar />
                <Routes>
                   
                    <Route path="SoundSet" element={<SoundSet />} />
                    <Route path="SoundSet/AddSound" element={<AddSound />} />
                    <Route path="Report" element={<Report />} />
                    <Route path="HomePage" element={<HomePage />} />
                    <Route path="Locationinformation" element={<InfoPlace />} />
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