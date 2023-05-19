import { useNavigate } from 'react-router-dom';
import './css-components/Menubar.css';
import Cookies from 'js-cookie';
import BurgerMenu from './js-components/BurgerMenu';
function Menubar(props) {
    const { title, arrow } = props;
    const navigate = useNavigate();
    const Rank = Cookies.get('Role');
    const username = Cookies.get('acNam');
    const handleClose = () => {
        Cookies.remove('accessToken');
        Cookies.remove('Role');
        window.location.href = "/"
    }
    const Goback = () => {
        navigate(-1);
    }
    return (
        <>
            <nav className='container-Menu'>
                <div className='MenuBar'>
                    <div className='logo-menu' onClick={() => window.location.href = "/HomePage"}>
                        <img src="/image/Logo-Kumwell.png" />
                    </div>
                    <i className={arrow} ><li className='background-arrow' onClick={Goback}></li></i>
                    <div className='menu-title'>{title}</div>
                    <div className='logout-btn' >{username}...</div>
                    <div className='profile-icon'>
                        <img src="/image/Profile.png" />
                    </div>
                    <div className='profile-menu'></div>
                </div>
            </nav>
            <BurgerMenu />
        </>
    );
}
export default Menubar;