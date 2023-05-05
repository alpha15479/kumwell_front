import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import HomePage from './routes/Home/HomePage';
import SoundSet from './routes/sound-setting/SetSound'
import AddSound from './routes/sound-setting/AddSound'
import InfoPlace from './routes/infomation-place/InfoPlace'
import Report from './routes/report/Report';
import SetAdmin from './routes/Set-Customer-and-Admin/SetAdmin';
import SetCustomer from './routes/Set-Customer-and-Admin/SetCustomer';
import SideBarUser from './components/SideBarUser';
import './index.css';

function Kumwell() {
    const [login, setLogin] = useState(null);
    const [loginUser, setLoginUser] = useState(null);

    useEffect(() => {
        const Rank = localStorage.getItem('Rank');
        if (Rank === 'ADMIN') {
            setLogin(true);
        } else if (Rank === 'USER (Admin)') {
            setLoginUser(true);
        }
    }, [])
    return (
        <>
            <div className='backgroundpage'>
                <Routes>
                    <Route index element={<LoginPage />} />
                </Routes>
                {login ?
                    <>
                        <Sidebar />
                        <Routes>
                            <Route index element={<LoginPage />} />
                            <Route path="SoundSet" element={<SoundSet />} />
                            <Route path="SoundSet/AddSound" element={<AddSound />} />
                            <Route path="Report" element={<Report />} />
                            <Route path="HomePage" element={<HomePage />} />
                            <Route path="Locationinformation" element={<InfoPlace />} />
                            <Route path="InformationUserSet" element={<SetAdmin />} />
                            <Route path="InformationCustomerSet" element={<SetCustomer />} />
                        </Routes></> : <></>}
                {loginUser ?
                    <>
                        <SideBarUser />
                        <Routes>
                            <Route index element={<LoginPage />} />
                            <Route path="SoundSet" element={<SoundSet />} />
                            <Route path="SoundSet/AddSound" element={<AddSound />} />
                            <Route path="Report" element={<Report />} />
                        </Routes></> : <></>}
            </div>
        </>
    );
}
export default Kumwell;