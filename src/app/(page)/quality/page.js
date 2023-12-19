import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import Connect from "@/app/components/connect/page"
import Service_box from "@/app/components/service_box/page"


export const metadata ={
    title:"Quality Assurance"
}


export default function Quality() {

    return (
        <main>
            <Bredcrump
                page_name="Services Details"
                page_title='"Quality Assurance"' />
            <div className="side service-main-section">
                <div className="container p-lg-5 p-3">
                    <div className="row services-section">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-section-titel">
                                <span>
                                    SERVICES DETAILS
                                </span>
                                <h1>Quality Assurance</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                            <img src="/service_section/qulity/qa-image.png" className="w-100" alt=""  style={{ opacity: '0.5' }} />
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
                                    <img src="/service_section/qulity/qa.png" alt="" />
                                </div>
                                <br></br>
                                <h4>Quality Assurance</h4>
                                <span>Build your Website and application foolproof of security and Crowdfull. We ascertain that a comprehensive, safe, and a fully functional product is delivered to all our clients.</span>
                                <p>We take it as our paramount responsibility to let our clients count on us for our reliable QA testing services and application quality assurance we establish and follow for each product we design and build. Vihaa Infotech has uniquely positioned itself in the market by providing QA software testing services and customizable testing processes by following a hybrid approach with flexible on-demand testing services and solutions at very economical prices. we provides high-quality testing solutions.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                            <div className="choose-right-content">
                                <div className="single-feacture">
                                    <div className="progressbar">
                                        <h1>
                                            <span className="counter" keyur="69">0</span>%
                                        </h1>
                                    </div>
                                    <div className="content">
                                        <h3>EXPERTISE LEVEL</h3>
                                    </div>
                                </div>
                                <div className="feacture-details">
                                    <h6 className="text-light">Our Advantages</h6>
                                    <p className="text-light">- Source Code Quality Assessment</p>
                                    <p className="text-light">- On Demand QA Services</p>
                                    <p className="text-light">- Own Unique Methodologies</p>
                                    <p className="text-light">- Multi-disciplinary IT resources</p>
                                    <p className="text-light">- Flexible Engagement Model</p>
                                    <p className="text-light">- Unique Skills & Expertise</p>
                                </div>
                                <div className="skill">
                                    <h6 className="text-light">Skill</h6>
                                    <p className="text-light">Performance Testing, Functional Testing, Web Testing, Unit Testing, Emulation Testing, Simulation Testing, Mobile app Testing, Visual Testing, Compatibility Testing</p>
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
