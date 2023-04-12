import './css-components/Sidebar.css';
import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import SidebarItem from './js-components/SidebarItem';
import LogoSidebar from './js-components/LogoSidebar';
function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <nav className="sidebar" >
        <LogoSidebar img="/image/Logo-Kumwell.png" supname="Lightning Warning System" />
        <SidebarItem title="หน้าหลัก" route="/HomePage" />
        <section onClick={handleMenuClick} >
          <span className="sidebar-font">ตั้งค่าสถานที่</span>
          {isMenuOpen ? (
            <FaAngleUp className='arrow-icon' />
          ) : (
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
        <SidebarItem title="การส่ง Line" route="/LineSend" />
        <SidebarItem title="ข้อมูล Activation Code" route="/InformationActivationCode" />
        <SidebarItem title="แก้ไขรหัสผ่าน" route="/PasswordSet" />
      </nav>
      
    </>
  );
}
export default Sidebar; 