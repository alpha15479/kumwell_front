import { useNavigate } from 'react-router-dom';
import './css-components/Menubar.css';
function Menubar(props) {
    const { title, arrow } = props;
    const navigate = useNavigate();
    const handleClose = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("Rank");
        window.location.href = "/"
    }
    const Goback = () => {
        navigate(-1);
    }
    return (
        <nav className='container-Menu'>

            <div className='MenuBar'>
                <div className='logo-menu'>
                    <img src="/image/Logo-Kumwell.png" />
                </div>
                <i className={arrow} ><li className='background-arrow' onClick={Goback}></li></i>
                <div className='menu-title'>{title}</div>
                <li className='logout-btn' onClick={handleClose}>Logout</li>
            </div>
        </nav>
    );
}
export default Menubar;