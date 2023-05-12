import { useEffect, useState } from 'react';
import '../css-components/Sidebar.css'
import { Link } from "react-router-dom";
function SidebarItem(props) {
    const { title, route } = props;
    const [status, setStatus] = useState('');
    const sidebarItems = document.querySelectorAll('.onSelect');

    sidebarItems.forEach((item) => {
        item.addEventListener('click', () => {
            sidebarItems.forEach((item) => {
                item.classList.remove('active');
            });
            item.classList.add('active');
        });
    });

    const pathCheck = () => {
        if (window.location.pathname == route) { setStatus('active'); }
    }

    useEffect(() => {
        pathCheck();
    }, [])


    return (
        <>
            <Link to={route} ><li className={`onSelect ${status}`}><span className="sidebar-font">{title}</span></li></Link>
        </>
    );
}

export default SidebarItem;