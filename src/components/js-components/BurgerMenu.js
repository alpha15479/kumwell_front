import React, { useState } from "react";
import '../css-components/Menubar.css';
import SidebarItem from "./SidebarItem";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
export default function BurgerMenu() {
    const [burger_class, setburgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menuburger hidden');
    const [menu_select, setMenuSelect] = useState('berger-unActive');
    const [isMenuClick, setIsMenuClick] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const updateMenu = () => {
        if (!isMenuClick) {
            setburgerClass("burger-bar clicked");
            setMenuClass("menuburger visible");
            setMenuSelect('berger-Active');
        }
        else {
            setburgerClass('burger-bar unclicked');
            setMenuClass('menuburger hidden');
            setMenuSelect('berger-UnActive');
        }
        setIsMenuClick(!isMenuClick);
    }

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav>
                <div className={menu_select}>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
                </div>
            </nav>
            <div className={menu_class}>
                <div className="setMenuMobile">
                    <SidebarItem title="หน้าหลัก" route="/HomePage" />
                    <section onClick={handleMenuClick} >
                        <span className="sidebar-font mArrow">ตั้งค่าสถานที่</span>
                        {isMenuOpen ? (
                            <FaAngleUp className='arrow-icon' />) : (
                            <FaAngleDown className='arrow-icon' />
                        )}
                    </section>
                    <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <SidebarItem title="ข้อมูลสถานที่" route="/Locationinformation" />
                    </div>
                    <SidebarItem title="ตั้งค่าข้อมูลเสียงแจ้งเตือน" route="/SoundSet" />
                    <SidebarItem title="ตั้งค่า E Field Sensor" route="/SensorSet" />
                    <SidebarItem title="ตั้งค่าข้อมูลบริษัทลูกค้า" route="/InformationCustomerSet" />
                    <SidebarItem title="ตั้งค่าข้อมูลผู้ใช้งาน" route="/InformationUserSet" />
                    <SidebarItem title="สถานะอุปกรณ์" route="/DeviceStatus" />
                    <SidebarItem title="รายงาน" route="/Report" />
                    <SidebarItem title="การทดสอบส่ง Line" route="/LineSend" />
                    <SidebarItem title="ข้อมูล Activation Code" route="/InformationActivationCode" />
                    <SidebarItem title="แก้ไขรหัสผ่าน" route="/PasswordSet" />
                </div>

            </div>

        </>
    );
}