import './css-components/Sidebar.css';
import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { Link } from "react-router-dom";
function SideBarUser() {
    const sidebarItems = document.querySelectorAll('.sidebar li');
    const Rank = localStorage.getItem('Rank');
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

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
            <nav className="sidebar" >
                <div className='Logo-sidebar'>
                    <img src="/image/Logo-Kumwell.png" />
                    <p className="supName" align="center">Lightning Warning System</p>
                    <p className="Rank" align="center">{Rank}</p>
                </div>
                <hr />
                <Link to="/HomePage"><li><span className="sidebar-font">หน้าหลัก</span></li></Link>
                <Link to="/HomePage"><li><span className="sidebar-font">Simulation Test</span></li></Link>
                <Link to="/HomePage"><li><span className="sidebar-font">Report Data</span></li></Link>
                <section onClick={handleMenuClick} ><span className="sidebar-font">ตั้งค่า</span>
                    {isMenuOpen ? (
                        <FaAngleUp className='arrow-icon' />
                    ) : (
                        <FaAngleDown className='arrow-icon' />
                    )}
                </section>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/HomePage"><li><span className="sidebar-font">ข้อมูลผู้ใช้</span></li></Link>
                    <Link to="/HomePage"><li><span className="sidebar-font">แก้ไขรหัสผ่าน</span></li></Link>
                </div>


            </nav>
        </>
    );
}
export default SideBarUser;