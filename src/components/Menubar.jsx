import { useNavigate } from 'react-router-dom';
import './css-components/Menubar.css';
import Cookies from 'js-cookie';
import BurgerMenu from './js-components/BurgerMenu';
function Menubar(props) {
    const { title, arrow } = props;
    const navigate = useNavigate();
    const handleClose = () => {
        Cookies.remove('accessToken')
        Cookies.remove('Role')
        window.location.href = "/"
    }
    const Goback = () => {
        navigate(-1);
    }
    return (
        <nav className='container-Menu'>
            <div className='MenuBar'>
                <div className='logo-menu' onClick={() => window.location.href = "/HomePage"}>
                    <img src="/image/Logo-Kumwell.png" />
                </div>
                <i className={arrow} ><li className='background-arrow' onClick={Goback}></li></i>
                <div className='menu-title'>{title}</div>
                <li className='logout-btn' onClick={handleClose}>Logout</li>
                <BurgerMenu/>
            </div>
        </nav>
    );
}
export default Menubar;