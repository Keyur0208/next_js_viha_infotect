import React from "react";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Horiztal_navbar() {

    return (
        <main>
            <div className="scrolling-navbar-2">
                <nav className="navbar fixed-top"
                    style={{ backgroundColor: "#1d1d1d", borderBottom: "1px solid rgba(255,255,255.3)" }}>
                    <div className="container-fluid">
                        <img src="/colorfull-logo.png"
                            style={{ width: "130px", height: "auto" }}
                            alt="logo"
                            className="logo"
                        />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <br></br>
                            <div style={{ height: "100vh" }}>
                                <div>
                                    <img
                                        src="/back_wite-logo.png"
                                        alt="log"
                                    />
                                </div>
                                <div className="offcanvas-body-navbar">
                                    <ul>
                                        <li className="menu-element2">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="menu-element2">
                                            <a href="/about" >About Us</a>
                                        </li>
                                        <li className="menu-element2">
                                            <a href="/why_choose_us"> WHY CHOOSE US </a>
                                        </li>
                                        <li className="menu-element2">
                                            <div className="service-button">
                                                <div className="service_link">
                                                    <a href="/our_servies"> Our Services </a>
                                                </div>
                                                <div>
                                                    <p className="plush">+</p>
                                                </div>
                                            </div>
                                            <div className="submenu2">
                                                <ul>
                                                    <li className="option">
                                                        <a href="/mobile_development">Mobile App Development</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/web_development">Web App Development</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/sharepoint">SharePoint Design &
                                                            Development</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/dontnet">Dotnet Development</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/ul_xi_development">UI/UX Design And
                                                            Development</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/seo_marketing">SEO And Digital Marketing</a>
                                                    </li>
                                                    <li className="option">
                                                        <a href="/quality">Quality Assurance</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-element">
                                            <a href="/our_works">Our Works</a>
                                        </li>
                                        <li className="menu-element">
                                            <a href="/team">Team</a>
                                        </li>
                                        <li className="menu-element">
                                            <a href="/contact">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </main>
    )
}

