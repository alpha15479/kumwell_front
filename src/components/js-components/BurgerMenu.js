import { useState } from "react";
import '../css-components/Menubar.css';
import Sidebar from "../Sidebar";
export default function BurgerMenu() {
    const [burger_class, setburgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menuburger hidden');
    const [isMenuClick, setIsMenuClick] = useState(false);
    const updateMenu = () =>{
        if(!isMenuClick){
            setburgerClass("burger-bar clicked");
            setMenuClass("menu visible")
        }
        else{
            setburgerClass('burger-bar unclicked');
            setMenuClass('menu hidden');
        }
    }
    return (
        <>
            <nav>
                <div className="burger-menu">
                    <div className={burger_class} onClick={updateMenu}></div>
                    <div className={burger_class} onClick={updateMenu}></div>
                    <div className={burger_class} onClick={updateMenu}></div>
                </div>
            </nav>
           {/* <div className={menu_class}></div> */}
        </>
    );
}