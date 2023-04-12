import { useNavigate } from 'react-router-dom';
import './css-components/Menubar.css';
function Menubar(props) {
    const { title,arrow } = props;
    const navigate = useNavigate();
    const handleClose = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("Rank");
        window.location.href = "/"
    }
    const Goback=()=>{
        navigate(-1);
    }
    return (
        <nav className='container-Menu'>
            <div className='MenuBar'>
               <i className={arrow} onClick={Goback}></i>
                <div>{title}</div>
                <li onClick={handleClose}>Logout</li>
            </div>
        </nav>
    );
}
export default Menubar;