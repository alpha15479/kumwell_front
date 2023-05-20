import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import './index.css';
import Cookies from 'js-cookie';
import Role from "./components/Role";
import UpDateOrgan from './routes/infomation-place/UpDateOrgan';

function Kumwell() {
    const [admin, setAdmin] = useState('');
    const role = (Cookies.get('Role'));
    useEffect(() => {
        if (role == 'Admin') { setAdmin(true) }
        if (role == 'User') { setAdmin(false) }
    }, []);

    if (!Cookies.get('accessToken')) {
        return <LoginPage />
    }

    return (
        <>
            <div className='backgroundpage'>
                {admin ? <><Role admin={true} /></> : <><Role user={true} /></>}
            </div>
        </>
    );
}


export default Kumwell;