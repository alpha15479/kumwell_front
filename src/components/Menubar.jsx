import { useNavigate } from 'react-router-dom';
import './css-components/Menubar.css';
import Cookies from 'js-cookie';
import BurgerMenu from './js-components/BurgerMenu';
import { useEffect, useState, useRef } from 'react';
function Menubar() {
    const navigate = useNavigate();
    const username = Cookies.get('acNam');
    const [profile, setProfile] = useState('profile-unActive');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isMenuClick, setIsMenuClick] = useState(false);
    const menuRef = useRef(null);
    const handleClose = () => {
        Cookies.remove('accessToken');
        Cookies.remove('Role');
        Cookies.remove('acNam');
        Cookies.remove('DatUse');
        window.location.href = "/"
    }
    const Goback = () => {
        navigate(-1);
    }
    const updateMenu = () => {
        if (!isMenuClick) {
            setProfile("profile-Active");
        }
        else {
            setProfile('profile-unActive');
        }
        setIsMenuClick(!isMenuClick);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setProfile('profile-unActive');
            setIsMenuClick(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <nav className='container-Menu'>
                <div className='MenuBar'>
                    <div className='logo-menu' onClick={() => window.location.href = "/HomePage"}>
                        <img src="/image/Logo-Kumwell.png" />
                    </div>
                    {/* <i  ><li className='background-arrow' onClick={Goback}></li></i> */}
                    <div className='logout-btn' onClick={updateMenu} ref={menuRef}>{username}...
                        <div className='profile-icon'>
                            <img src="/image/Profile.png" />
                        </div>
                    </div>

                    <div className="font-container">
                        <p className="moving-font">Lightning Warning System "We Take You Safety"</p>
                    </div>
                    
                    <div className='timeNow'>
                        {currentTime.toLocaleTimeString()}
                    </div>
                    <div className={profile}>
                        <div className='profile-menu' >
                            <div className='item-profile'>
                                <li><img src="/image/settings.png" width="13px" />  Password Setting
                                </li>
                                <li onClick={handleClose}>
                                    <img src="/image/logout.png" width="13px" />  Logout
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <BurgerMenu />
        </>
    );
}
export default Menubar;