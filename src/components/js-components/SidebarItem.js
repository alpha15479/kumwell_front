import '../css-components/Sidebar.css'
import { Link } from "react-router-dom";
function SidebarItem(props) {
    const { title, route } = props;
    const sidebarItems = document.querySelectorAll('li');

    sidebarItems.forEach((item) => {
        item.addEventListener('click', () => {
            sidebarItems.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    return (
        <>
            <Link to={route}><li><span className="sidebar-font">{title}</span></li></Link>
        </>
    );
}
export default SidebarItem;