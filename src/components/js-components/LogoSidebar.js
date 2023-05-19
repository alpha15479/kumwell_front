import '../css-components/Sidebar.css'
import Cookies from 'js-cookie';
function LogoSidebar(props) {
    const { img, supname } = props;
    const data = Cookies.get('Role');
    const Rank = data.toUpperCase();
    return (
        <>
            <div className='Logo-sidebar'>
                <img src={img} onClick={() => window.location.href = "/HomePage"} />
                <p className="supName" align="center">{supname}</p>
                <p className="Rank" align="center">{Rank}</p>
            </div>
            <hr />
        </>
    );
}
export default LogoSidebar;