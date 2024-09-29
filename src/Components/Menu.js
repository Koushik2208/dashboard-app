import { useState } from "react";
import { Outlet } from "react-router-dom";
import { RiMenuFold4Fill } from "react-icons/ri";
import '../Styles/globals.css';
import '../Styles/components/menu.css';
import { DropdownComponent } from "./DropdownComponent";
const Menu = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="menu-top">
                <div>
                    <RiMenuFold4Fill size={20} className="me-3 pointer" onClick={toggleMenu} />
                    <a href="/">logo</a>
                </div>
                <div className="row-center gap-20">
                    <span>option1</span>
                    <span>option2</span>
                    <span>option3</span>
                </div>
            </div>
            <div className="d-flex">
                <div className={`menu ${open ? 'open' : ''}`}>
                    <DropdownComponent />
                </div>
                <div className={`child ${open ? 'open' : ''} flex-1`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export { Menu }