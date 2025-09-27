import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <section className="navbar_left">
                    <NavLink to='/' className="navbar_left_logoLink">
                        <img className="navbar_left_logo" src="https://e-learn.smanegeri1kroya.sch.id/pluginfile.php/1/theme_boost_union/logocompact/300x300/1752021589/Logo2015%28256%29.png" alt="logo SMAN 1 Kroya" />
                    </NavLink>

                    <div className="navbarMenus">
                        <h3>Beranda</h3>
                        <div className="navbarMenus_underline"></div>
                    </div>

                    <div className="navbarMenus">
                        <h3>Artikel</h3>
                        <div className="navbarMenus_underline"></div>
                    </div>

                    <div className="navbarMenus">
                        <h3>Video</h3>
                        <div className="navbarMenus_underline"></div>
                    </div>

                    <div className="navbarMenus">
                        <h3>Latihan Soal</h3>
                        <div className="navbarMenus_underline"></div>
                    </div>
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