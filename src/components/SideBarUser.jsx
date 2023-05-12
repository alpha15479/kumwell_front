import './css-components/Sidebar.css';
import React, { useState, useEffect } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import SidebarItem from './js-components/SidebarItem';
import LogoSidebar from './js-components/LogoSidebar';
function SidebarUser() {
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
        <SidebarItem title="หน้าหลัก" route="/SoundSet" />
        <SidebarItem title="Simulation Test" route="/SensorSet" />
        <SidebarItem title="Report Data" route="/HomePage" />
        <section onClick={handleMenuClick} >
          <span className="sidebar-font">ตั้งค่า</span>
          {isMenuOpen ? (
            <FaAngleUp className='arrow-icon' />) : (
            <FaAngleDown className='arrow-icon' />
          )}
        </section>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <SidebarItem title="ข้อมูลผู้ใช้งาน" route="/" />
        <SidebarItem title="เปลี่ยนรหัสผ่าน" route="/" />
        </div>
      </nav>
      
    </>
  );
}
export default SidebarUser; 