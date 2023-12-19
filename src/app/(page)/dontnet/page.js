import React from 'react'
import Bredcrump from '@/app/components/breadcrump/page'
import Service_box from '@/app/components/service_box/page'
import Connect from '@/app/components/connect/page'

export const metadata = {
    title: "Dotnet Development"
}

export default function Services() {

    const a = <text>
        ".Net Developmnet<br></br>
        (ERP Development)"
    </text>

    return (
        <main>
            <Bredcrump
                page_name="Services Details"
                page_title={a} />
            <div className="side service-main-section">
                <div className="container p-lg-5 p-3">
                    <div className="row services-section">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-section-titel">
                                <span>
                                    SERVICES DETAILS
                                </span>
                                <h1>.Net Developmnet <br></br> (ERP Development)</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 pt-0 pt-lg-5">
                            <img src="/service_section/dotnet/dot-developmnet.png" className="w-100" alt="" />
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
                                    <img src="/service_section/dotnet/net.png" alt="" />
                                </div>
                                <br></br>
                                <h4>.Net Developmnet (ERP Development)</h4>
                                <span>At Vihaa Infotech, From a simple CMS to complex Enterprise solutions deliverables with our expert and business-Obsessed Developers to provide robust and intutive user experience.</span>
                                <p>Vihaa Infotech offers a wide range of .Net based services and has vast capabilities to build robust and scalable web and enterprise web based applications. We builds simple, fast, and powerful websites with ASP.Net. We craft quality web solutions with our ASP.NET development framework for businesses across the globe, irrespective of the expansion and nature of their business.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                            <div className="choose-right-content">
                                <div className="single-feacture">
                                    <div className="progressbar">
                                        <h1>
                                            <span className="counter" keyur="93">0</span>%
                                        </h1>
                                    </div>
                                    <div className="content">
                                        <h3>EXPERTISE LEVEL</h3>
                                    </div>
                                </div>
                                <div className="feacture-details">
                                    <h6 className="text-light">Our Advantages</h6>
                                    <p className="text-light">- Adaptive Improved Approach</p>
                                    <p className="text-light">- Highly Experienced Experts</p>
                                    <p className="text-light">- Trusted Services</p>
                                    <p className="text-light">-  Powerfull and Scalable Solutions</p>
                                    <p className="text-light">- Innovative Solutions</p>
                                    <p className="text-light">- Agile Development Model</p>
                                </div>
                                <div className="skill">
                                    <h6 className="text-light">Skill</h6>
                                    <p className="text-light">ASP.NET, ASP.Net MVC, ASP.Net AJAX, ASP.Net Dynamic Data, ASP .NET, WCF, REST, SOAP, JSON, OData, ASP Dot Net Web Development Customization, ASP.NET Desktop Application Development, ASP.NET Migration, ASP.NET Ecommerce Development</p>
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
