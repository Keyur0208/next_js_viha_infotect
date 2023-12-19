import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function Vertical_navbar() {
  return (
    <>
      <div>
        <div className="scrolling-navbar">
          <img
            src="/logo.svg"
            alt="logo"
          />
          <div>
            <nav className="navbar">
              <div className="container-fluid ">
                <FontAwesomeIcon icon={faBars} data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop" />
                <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel" style={{ height: '101vh',backgroundColor:'#1C1C1C',color:'#FFFFFF'}} >
                  <div className="offcanvas-body">
                    <div className="offcanvas-header">
                      <div className="scrolling-navbar-backend">
                        <img
                          src="/back_wite-logo.png"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faXmark} data-bs-dismiss="offcanvas"
                          aria-label="Close" className='fa-xmark' />
                      </div>
                    </div>
                    <div className="offcanvas-center">
                      <div className="offcanvas-body-navbar">
                        <ul>
                          <li className="menu-element ">
                            <a href="/">Home</a>
                          </li>
                          <li className="menu-element">
                            <a href="/about">About Us</a>
                          </li>
                          <li className="menu-element">
                            <a href="/why_choose_us"> WHY CHOOSE US </a>
                          </li>
                          <li className="menu-element">
                            <div className="service-button">
                              <div className="service_link">
                                <a href="/our_servies" id="white"> Our Services
                                </a>
                              </div>
                              <div>
                                <span className="plush">+</span>
                              </div>
                            </div>
                            <div className="submenu">
                              <ul>
                                <li className="option">
                                  <a href="/mobile_development">Mobile App
                                    Development</a>
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
                                  <a href="/seo_marketing">SEO And Digital
                                    Marketing</a>
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
              </div>
            </nav>
          </div>
          <div>
            <a className="whatsapp mb-5" href="https://wa.me/+917878072598">
              <FontAwesomeIcon icon={faWhatsapp} className="fawhatsapp px-2" />Let's Connect
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


