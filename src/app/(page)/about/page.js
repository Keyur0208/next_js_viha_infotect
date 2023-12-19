import React from 'react'
import Bredcrump from '@/app/components/breadcrump/page'
import Client from '@/app/components/client/page'
import News from '@/app/components/news/page'
import Connect from '@/app/components/connect/page'
import './about.css'
import about from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  title: "About Us"
}

export default function About() {
  return (
    <main>
      <Bredcrump
        page_name="About"
        page_title='"Get To Know About Viha Infotech"'
      />
      <div className="side approach-main-section">
        <div className="container p-lg-5 p-3">
          <div className="row approach-section">
            <div className="col-12 col-sm-12 col-md-12 col-lg-9">
              <div className="approach-section-titel" data-aos="fade-up">
                <h1>Our Approach</h1>
                <p>Welcome to Vihaa Infotech! We create high quality products that will make your life
                  better.</p>
              </div>
              <br></br>
              <div className="row gx-0">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5">
                  <div className="approach-section-sub-image" data-aos="fade-up">
                    <img
                      src="/approach(1).png"
                      className="w-100"
                      alt="approach(1)" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
                  <div className="approach-section-details" data-aos="fade-up">
                    <h1>Welcome To Vihaa Infotech</h1>
                    <p>Vihaa infotech is premium outsourcing company working on IT consulting &
                      solutions based in India. With best efforts of Vihaa’s team, we provide better
                      solutions in native Mobile apps solutions, Web Development and web designing
                      with an attractive User interface, best quality and better performance.</p>
                    <div className="devider">
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6  about-feature">
                        <h5>Customized Solutions</h5>
                        <p>Services are professional offerings provided.</p>
                      </div>
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 about-feature">
                        <h5>Quality Reliability</h5>
                        <p>Services are professional offerings provided.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 ">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12">
                  <div className="approach-section-image" data-aos="fade-up">
                    <img
                      src="/approach(2).png"
                      className="w-100"
                      alt="approach(2)" />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12" >
                  <div className="about-experience" data-aos="fade-up">
                    <div className="about-experience-image">
                      <img
                        src="/10_year.png"
                        alt="10_year" />
                    </div>
                    <div className="about-exp-text">
                      <h3>10</h3>
                      <span>
                        Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br><br></br><br></br>
          <div className="choose-section pb-5">
            <div className="row gy-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="choose-section-titel">
                  <span>WHY CHOOSE US</span>
                  <h1>DISTINCTIVE SOLUTIONS MEAN VIHAA INFOTECH</h1>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="choose-section-image">
                  <img
                    src="/approach(3).png"
                    alt="approach(3)"
                    className='w-100' />
                </div>
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                <div className="choose-left-content">
                  <div className="choose-left-vector">
                    <img
                      src="/box2.svg"
                      className="choose-left-vector-down"
                      alt="" />
                    <img
                      src="/box.svg"
                      className="choose-left-vector-top"
                      alt="" />
                  </div>
                  <div className="choose-icon">
                    <img src="/colorfull-logo.png" alt="" />
                  </div>
                  <br></br>
                  <h4>Vihaa is an IT services & Solutions based <br></br>
                    <span>Organization in India.</span>
                  </h4>
                  <p>We provide one of the best solutions to the Web Application, UI design and
                    development of web and Mobile application Solutions with the smooth and better
                    performance.</p>
                  <div className="s1">
                    <h1>#1</h1>
                  </div>
                  <div className="about-choose-btn">
                    <a href="./about">
                      <FontAwesomeIcon icon={faArrowRight} className='fa-arrow-righ' />
                      About More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
                <div className="choose-contect">
                  <h3>Who We Are</h3>
                  <p>We are a team of United State Mobile and Web development professionals who love
                    partnering with good people and businesses to help them achieve online success.</p>
                </div>
                <div className="choose-contect">
                  <h3>What We Do</h3>
                  <p>We’re focused on honoring our knowledge and bringing everything we have to the table
                    for our clients. We create custom, functional Mobile Apps and websites focused on
                    converting your users into customers.</p>
                </div>
                <div className="choose-contect">
                  <h3>Why We Do It</h3>
                  <p>Each of us loves what we do and we feel that spirit helps translate into the quality
                    of our work. Working with clients who love their work combines into a fun, wonderful
                    partnership for everyone involved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side our-main-section">
        <div className="container p-lg-5 p-3">
          <div className="row pt-5 our-section" style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 pt-lg-5">
              <div className="state-titel" data-aos="fade-right">
                <h1>Our States</h1>
                <p>The classification of Web resources with respect to their content and/or characteristics.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8  ">
              <div className="counter-area mt-5" data-aos="fade-up" style={{ backgroundColor: '#1B1F23' }}>
                <ul>
                  <li>
                    <div className="single-counter">
                      <div className="icon">
                        <img
                          src="/states(4).svg"
                          alt="states(4)"
                        />
                      </div>
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
                        <div className="icon">
                          <img
                            src="/states(2).svg"
                            alt="states(2)"
                          />
                        </div>
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
                        <div className="icon">
                          <img
                            src="states(3).svg"
                            alt="states(3)"
                          />
                        </div>
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
                    <div className="single-counter">
                      <div className="content">
                        <div className="icon">
                          <img
                            src="states(1).svg"
                            alt="states(1)"
                          />
                        </div>
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
      <div className="side">
        <div>
          <div className="customer-section p-lg-5 p-3 z-3">
            <div className="customer-section-titel">
              <h1>We Take Care Of More Than 50+ Customers</h1>
            </div>
            <div className={about.language} >
              <div className={about.sub_language}>
                <img src="/sub-language(1).svg" alt="" />
                <img src="/sub-language(2).svg" alt="" />
                <img src="/sub-language(3).svg" alt="" />
                <img src="/sub-language(4).svg" alt="" />
                <img src="/sub-language(5).svg" alt="" />
                <img src="/sub-language(6).svg" alt="" />
                <img src="/sub-language(7).svg" alt="" />
                <img src="/sub-language(8).svg" alt="" />
                <img src="/sub-language(9).svg" alt="" />
                <img src="/sub-language(10).svg" alt="" />
                <img src="/sub-language(11).svg" alt="" />
                <img src="/sub-language(12).svg" alt="" />
                <img src="/sub-language(13).svg" alt="" />
                <img src="/sub-language(14).svg" alt="" />
                <img src="/sub-language(15).svg" alt="" />
                <img src="/sub-language(16).svg" alt="" />
                <img src="/sub-language(17).svg" alt="" />
                <img src="/sub-language(18).svg" alt="" />
                <img src="/sub-language(19).svg" alt="" />
                <img src="/sub-language(1).svg" alt="" />
                <img src="/sub-language(2).svg" alt="" />
                <img src="/sub-language(3).svg" alt="" />
                <img src="/sub-language(4).svg" alt="" />
                <img src="/sub-language(5).svg" alt="" />
                <img src="/sub-language(6).svg" alt="" />
                <img src="/sub-language(7).svg" alt="" />
                <img src="/sub-language(8).svg" alt="" />
                <img src="/sub-language(9).svg" alt="" />
                <img src="/sub-language(10).svg" alt="" />
                <img src="/sub-language(11).svg" alt="" />
                <img src="/sub-language(12).svg" alt="" />
                <img src="/sub-language(13).svg" alt="" />
                <img src="/sub-language(14).svg" alt="" />
                <img src="/sub-language(15).svg" alt="" />
                <img src="/sub-language(16).svg" alt="" />
                <img src="/sub-language(17).svg" alt="" />
                <img src="/sub-language(18).svg" alt="" />
                <img src="/sub-language(19).svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Client />

      <div  className={about.news_main_section}>
        <div className='side' >
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
                    <a href="./News-Artits/news_articals.html">View All Case</a>
                  </div>
                </div>
              </div>
            </div>
            <News />
          </div>
        </div>

      </div>

      <Connect />

    </main >
  )
}
