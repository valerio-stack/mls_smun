import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import NavbarMenu from "./navbarMenus"

export default function Navbar() {
    let [activeMenu, set_activeMenu] = useState()

    return (
        <>
            <nav className="navbar">
                <section className="navbar_left">
                    <NavLink to='/' className="navbar_left_logoLink">
                        <img className="navbar_left_logo" src="https://e-learn.smanegeri1kroya.sch.id/pluginfile.php/1/theme_boost_union/logocompact/300x300/1752021589/Logo2015%28256%29.png" alt="logo SMAN 1 Kroya" />
                    </NavLink>

                    <NavLink to='/' className="navbar_left_logoLink">
                        <NavbarMenu title={'Beranda'} activeMenu={activeMenu} set_activeMenu={set_activeMenu}/>
                    </NavLink>

                    <NavLink to='/' className="navbar_left_logoLink">
                        <NavbarMenu title={'Panduan'} activeMenu={activeMenu} set_activeMenu={set_activeMenu}/>
                    </NavLink>

                    <NavLink to='/' className="navbar_left_logoLink">
                        <NavbarMenu title={'Video'} activeMenu={activeMenu} set_activeMenu={set_activeMenu}/>
                    </NavLink>

                    <NavLink to='/' className="navbar_left_logoLink">
                        <NavbarMenu title={'Latihan Soal'} activeMenu={activeMenu} set_activeMenu={set_activeMenu}/>
                    </NavLink>

                    <NavLink to='/' className="navbar_left_logoLink">
                        <NavbarMenu title={'Settings'} activeMenu={activeMenu} set_activeMenu={set_activeMenu}/>
                    </NavLink>
                </section>
                

                <section className="navbar_right">
                    <i className="fa-solid fa-bell navbar_right_notificationButton">
                        {true && 
                            <div className="navbar_right_notificationCount">2</div>
                        }
                    </i>
                    
                    <img src="https://i.pinimg.com/736x/81/da/f1/81daf1323de5a45c224d419367d6b088.jpg" alt="pfp" className="navbar_right_pfp"/>
                </section>
            </nav>
        </>
    )
}