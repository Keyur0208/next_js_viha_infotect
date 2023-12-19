import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons"
import Case from "./components/case/page"
import Solutions from "./components/solotions/page"
import Client from "./components/client/page"
import Development from "./components/development/page"
import News from "./components/news/page"
import Form from "./components/form/page"

export const metadata = {
  title: "Home Page"
}

export default function Home() {

  const Round_svg = () => {
    return (
      <svg width={21} height={21} viewBox="0 0 21 21" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1599_148)">
          <mask id="mask0_1599_148" style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse" x="0" y="0" widths={21} height={21}>
            <path d="M21 0H0V21H21V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1599_148)">
            <path
              d="M21 10.5L18.1068 8.45834L19.5999 5.25001L16.0651 4.93491L15.75 1.40008L12.5417 2.89324L10.5 0L8.45833 2.89324L5.25001 1.40008L4.93491 4.93491L1.40008 5.25001L2.89324 8.45834L0 10.5L2.89324 12.5417L1.40008 15.75L4.93491 16.0651L5.25001 19.5999L8.45833 18.1068L10.5 21L12.5417 18.1068L15.75 19.5999L16.0651 16.0651L19.5999 15.75L18.1068 12.5417L21 10.5Z"
              fill="#121212" style={{ fill: "#207EBC" }} />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1599_148">
            <rect width={21} height={21} fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  const Statr_icon = () => {
    return (
      <>
        <FontAwesomeIcon icon={faStar} size="2xs" className="fa-star" />
        <FontAwesomeIcon icon={faStar} size="2xs" className="fa-star" />
        <FontAwesomeIcon icon={faStar} size="2xs" className="fa-star" />
        <FontAwesomeIcon icon={faStar} size="2xs" className="fa-star" />
        <FontAwesomeIcon icon={faStar} size="2xs" className="fa-star" />
      </>
    )
  }

  const Industries = (props) => {
    return (
      <div className="industries-server">
        <div className="industries-server-border">
          <div className="industries-server-icon">
            <img src={props.img} alt="" />
          </div>
          <div className="industries-server-titel">
            <h5>{props.title}</h5>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className="company-header" >
        <div className="d-flex">
          <div className="company-name" style={{ width: "20%" }}>
            <h2>Viha infotech</h2>
          </div>
          <div className="banner" data-aos="fade-right" style={{ width: "80%" }}>
            <div className="container-fluid">
              <div className="row  px-lg-0 mt-5 pt-5 ">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-11 ">
                    <h1>
                      ENTERPRISE <br></br>
                      WEB & MOBILE SOFTWARE <br></br>
                      DEVELOPMENT
                    </h1>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-1 social-media">
                    <FontAwesomeIcon icon={faFacebookF} className="social-media-icon" />
                    <h3>.</h3>
                    <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
                    <h3>.</h3>
                    <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
                    <h3>.</h3>
                    <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner company-info" data-aos="fade-right">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                <div className="banner-paregraph">
                  <p>
                    Vihaa infotech is a global quality company active in IT services from last few
                    years.
                    Vihaa
                    is established in 2015 by young visionary entrepreneurs to create a platform from
                    where
                    programmers have a chance to apply their innovative ideas and create there best
                    career
                    opportunities. Inside companies, Vihaa infotech’s networks dramatically improve
                    employee's
                    productivity alignment and innovation.
                  </p>
                </div>
                <br></br>
                <div className="arrow">
                  <a href="/our_servies" className="scroll-down-btn">
                    <FontAwesomeIcon icon={faArrowRight} className="rightarrow" />
                    <span>VIEW MORE</span>
                  </a>
                </div>
                <div className="scroll-down mt-5 pt-5 p-2 ">
                  <a href="#">
                    <span>
                    </span>
                    scroll down To Explore
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7" style={{ color: "white" }}>
                <video autoPlay loop muted className="video w-100">
                  <source src="/new-Video-Vihaa (1).m4v" autoPlay />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="language ">
          <div className="sub-language">
            <img src="/asset 4.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 5.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 6.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 7.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 8.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 9.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 10.png" alt="" />
            <img src="/asset 3.svg" alt="" />
            <img src="/asset 11.png" alt="" />
            <img src="/asset 3.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="review-section" >
        <div className="remove-container-fluid">
          <div className="side" >
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12  col-xl-5  pt-3 p-lg-5 pb-3 review-bg-img">
                <div className="row">
                  <h4 style={{ fontWeight: "600px" }} >Review on</h4>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="review">
                      <a href="" style={{ textDecoration: "none", color: "white" }} >
                        <div>
                          <img
                            src="/asset 12.svg"
                            className="card-title pt-3"
                            alt="star"
                          />
                        </div>
                        <div className="d-flex">
                          <div >
                            <Statr_icon />
                          </div>
                          <div>
                            <small className="px-1 fs-7">5.0/5.0</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="review">
                      <a href="" style={{ textDecoration: "none", color: "white" }} >
                        <div>
                          <img
                            src="/asset 13.svg"
                            className="card-title pt-3"
                            alt="google"
                          />
                        </div>
                        <div className="d-flex">
                          <div>
                            <Statr_icon />
                          </div>
                          <div>
                            <small className="px-1 fs-7">5.0/5.0</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 pt-3 p-lg-5  "
                style={{ backgroundColor: "#121212" }} >
                <div className="counter-area mt-5">
                  <ul>
                    <li>
                      <div className="single-counter">
                        <div className="content">
                          <div className="number">
                            <h3 className="counter" keyur="15">0</h3>
                            <span>Years</span>
                          </div>
                          <p>Working With Passion</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-counter">
                        <div className="content">
                          <div className="number">
                            <h3 className="counter" keyur="50">0</h3>
                            <h3 className="ml-5">+</h3>
                            <span>customers</span>
                          </div>
                          <p>Satisfied Customers</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-counter">
                        <div className="content">
                          <div className="number">
                            <h3 className="counter" keyur="127">0</h3>
                            <h3 className="ml-5">+</h3>
                            <span>Projects</span>
                          </div>
                          <p>We Have Completed</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className="content">
                          <div className="number">
                            <h3 className="counter" keyur="20">0</h3>
                            <h3 className="ml-5">+</h3>
                            <span>Employee</span>
                          </div>
                          <p>Dedicated Experts </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="culture-section" >
        <br></br><br></br><br></br><br></br>
        <div className="container">
          <div className="side" >
            <div className="row pb-5" style={{ overflow: 'hidden' }} >
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6" data-aos="fade-right">
                <div className="section_titel">
                  <span>
                    Our Value & Culture
                  </span>
                  <h2>Who We Are</h2>
                  <p>Vihaa is an IT services & Solutions based organization in India. We provide one of the
                    best
                    solutions to the Web Application, UI design and development of web and Mobile
                    application
                    Solutions with the smooth and better performance.</p>
                  <p> We are committed to helping our customer to get best solutions for their online business
                    products/services and create a value to their end solutions/products. To be a World
                    Class IT
                    Service/Consultation Organization, the first choice of any customer when they think of
                    IT
                    Consultation & Services/Enterprise solution and for employees.</p>
                </div>
                <div className="row mt-4">
                  <div className="col-6">
                    <div className="about_feature">
                      <Round_svg />
                      <span>Creative Strategy</span>
                    </div>
                    <div className="about_feature">
                      <Round_svg />
                      <span>Unique Productiony</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="about_feature">
                      <Round_svg />
                      <span>Rebranding Design</span>
                    </div>
                    <div className="about_feature">
                      <Round_svg />
                      <span>Corporate Identity</span>
                    </div>
                  </div>
                </div>
                <div className="section_titel">
                  <p>We are a team of United State Mobile and Web development professionals who love
                    partnering
                    with
                    good people and businesses to help them achieve online success.</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 mt-4" data-aos="fade-left">
                <div className="about_image">
                  <img
                    src="/asset 14.png"
                    alt="" />
                </div>
                <div className="about_image_second">
                  <img
                    src="/asset 15.png"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Solutions />

      <div className="side achieve-section">
        <div className="container">
          <div className="row achieve-content" style={{ overflow: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="achieve-content-data" data-aos="fade-right">
                <div>
                  <h1>#1</h1>
                  <h3>Best IT Agency Services And Solutions Company
                    <span style={{ color: '#027EBC', fontSize: '33px' }} >Since</span>
                    <span className="year">2019.</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="achieve-content-image" data-aos="fade-left">
                <img
                  src="/asset 23.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="side industries-section">
        <div className="container p-5">
          <div className="industries">
            <div className="industries-titel" data-aos="fade-up">
              <span>
                INDUSTRIES
              </span>
              <h1>Industries We Serve</h1>
            </div>
            <div className="row pt-4 g-4 pb-4">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 24.svg"
                  title="Healthcare"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 25.svg"
                  title="Hospitality"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 26.svg"
                  title="Real Estate"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 27.svg"
                  title="Education"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 28.svg"
                  title="FMCF"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 29.svg"
                  title="Ecommerce"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 30.svg"
                  title="Automobile"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 33.svg"
                  title="Bar & Pubs"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 34.svg"
                  title="Oil & Gas"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 35.svg"
                  title="Fintech"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 37.svg"
                  title="Managemen"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                <Industries
                  img="/asset 37.svg"
                  title="E-vehical"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="side case-study-section ">
        <div className="container p-lg-5 p-3 ">
          <div className="case-study pt-5" data-aos="fade-up">
            <span>case study</span>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <div className="case-study-titel">
                  <h2>Success Stories</h2>
                </div>
              </div>
              <div className="col-12 col-sm-12  col-md-3 col-lg-3 col-xl-2 ">
                <div className="case-study-btn">
                  <a href="/case_study">View All Case</a>
                </div>
              </div>
            </div>
          </div>
          <Case />
        </div>
      </div>


      <Client />

      <Development />


      <div className="side news-main-section">
        <div className="container p-lg-5 p-3">
          <div className="news-section" data-aos="fade-up">
            <span>IT NEWS & TRENDS</span>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <div className="news-section-titel">
                  <h1>News & Article</h1>
                </div>
              </div>
              <div className="col-12 col-sm-12  col-md-3 col-lg-3 col-xl-2">
                <div className="case-study-btn">
                  <a href="/news_article">View All Case</a>
                </div>
              </div>
            </div>
          </div>

          <News />
          
        </div>
      </div>

      <div className="side contact-main-section">
        <div className="container p-lg-5 p-3  pb-3">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6" data-aos="fade-up">
              <div className="contact-section">
                <div className="contact-section-titel">
                  <span>
                    contact
                  </span>
                  <h1>Contact</h1>
                  <p>We’re happy to answer any questions you may have and help your determine which of our
                    services best fit your needs.</p>
                </div>
                <div className="contact-number">
                  <p>Call Us Now:
                    <a href="tel:+91 78780 72598">+91 78780 72598</a>
                  </p>
                </div>
                <p className="contact-details">We offer the best IT services through top countries. With our
                  services, you stand to gain the benefits that have been described above and even more.
                  We
                  help you save more by paying for only the IT services you need for your business. Our
                  flexible business model allows us to personalize IT services to suit your needs.</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <Form />
            </div>
          </div>
        </div>
      </div>

    </main >
  )
}


