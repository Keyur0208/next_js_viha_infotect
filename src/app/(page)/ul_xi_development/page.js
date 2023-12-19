import React from 'react'
import Bredcrump from '@/app/components/breadcrump/page'
import Connect from '@/app/components/connect/page'
import Service_box from '@/app/components/service_box/page'

export const metadata = {
    title: "UI/UX Design And Development"
}

export default function Uixi() {

    return (
        <main>
            <Bredcrump
                page_name="Services Details"
                page_title='"UI/UX Design And Development"' />

            <div className="side service-main-section" >
                <div className="container p-lg-5 p-3">
                    <div className="row services-section">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-section-titel">
                                <span>
                                    SERVICES DETAILS
                                </span>
                                <h1>UI/UX Design and Development</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 pt-0 pt-lg-5">
                            <img src="/service_section/ui_xi/ui-ux-image.png" 
                            className="w-100" 
                            alt=""
                            style={{opacity:'0.5'}} />
                        </div>
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
                                    <img src="/service_section/ui_xi/ui-ux.png" alt="" />
                                </div>
                                <br></br>
                                    <h4>UI/UX Design and Development</h4>
                                    <span>We Deliver an excellent User Interface will create an instant attraction to your app while a superb User Experience will put a lasting impact on your users’ mind.</span>
                                    <p>Vihaa Infotech coming up with an efficient Ul/UX design for an app is always a priority for most app owners. This requires thorough research and prior planning in order to understand the needs of your users and the problem you intend to solve with your app. Regardless of your needs, you will have to come up with a design that works.</p>
                                    <p>ur desginer think and innovate unique design that never has been created make your organisation or business valuable to put a punch mark in competitve tech industries. we delivered many reward winning designs.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                            <div className="choose-right-content">
                                <div className="single-feacture">
                                    <div className="progressbar">
                                        <h1>
                                            <span className="counter" keyur="92">0</span>%
                                        </h1>
                                    </div>
                                    <div className="content">
                                        <h3>EXPERTISE LEVEL</h3>
                                    </div>
                                </div>
                                <div className="feacture-details">
                                    <h6 className="text-light">Our Advantages</h6>
                                    <p className="text-light">- User Centric Approach</p>
                                    <p className="text-light">- Unique and Innovative concepts</p>
                                    <p className="text-light">- Builds your brand</p>
                                    <p className="text-light">- High Quality and Leveraging solutions</p>
                                    <p className="text-light">- Focus on your Intended Audience</p>
                                    <p className="text-light">- Iterative UI Designs</p>
                                </div>
                                <div className="skill">
                                    <h6 className="text-light">Skill</h6>
                                    <p className="text-light">JavaScript frameworks, Jquery, HTML5, CSS3, Bootstrap 3, 4, Responsive design, Mobile app UI design, Web app UI design and front-end development, Adobe Photoshop, Adobe illustrtor, Vector Designs, Logo Designs, Brochure Design, Graphics and Banner Design, Wireframing and prototyping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Service_box />
            <Connect />
        </main>
    )
}

