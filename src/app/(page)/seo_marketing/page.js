import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import Connect from "@/app/components/connect/page"
import Service_box from "@/app/components/service_box/page"

export const metadata = {
    title: "SEO And Digital Marketing"
}


export default function Seo_marketing() {
    return (
        <main>
            <Bredcrump
                page_name="Services Details"
                page_title='"SEO And Digital Marketing"' />
            <div className="side service-main-section">
                <div className="container p-lg-5 p-3">
                    <div className="row services-section">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-section-titel">
                                <span>
                                    SERVICES DETAILS
                                </span>
                                <h1>SEO and Digital Marketing</h1>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                            <img src="/service_section/seo/seo-image.png" className="w-100" alt="" style={{ opacity: '0.5' }} />
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
                                    <img src="/service_section/seo/seo.png" alt="" />
                                </div>
                                <br></br>
                                <h4>SEO and Digital Marketing</h4>
                                <span>Result Driven Search Engine Optimisation (SEO) involves developing a website that is easy to categorise and find. SEO is a fundamental aspect of digital marketing strategies.</span>
                                <p>We analyse your online reputation carefully. We will analyse your on-page and off-page SEO status and make you ready for a exclusive jump for top ranking, building your brand reputation year by year. Our expert analyst also offers an limited time period that rocks in google ads. Reach you in front of your acquire customers by digital marketing and white hat SEO. You’ll stand out everywhere, whether people are looking for you on search engines, Maps, and other sources. Digital marketing is a process of making a website familiar and friendly to search engines and users.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                            <div className="choose-right-content">
                                <div className="single-feacture">
                                    <div className="progressbar">
                                        <h1>
                                            <span className="counter" keyur="20">0</span>%
                                        </h1>
                                    </div>
                                    <div className="content">
                                        <h3>EXPERTISE LEVEL</h3>
                                    </div>
                                </div>
                                <div className="feacture-details">
                                    <h6 className="text-light">Our Advantages</h6>
                                    <p className="text-light">- Result Driven SEO</p>
                                    <p className="text-light">- Standard tools used</p>
                                    <p className="text-light">- Transparency of deliverables</p>
                                    <p className="text-light">- Multi-disciplinary IT resources</p>
                                    <p className="text-light">- Security and IP protection</p>
                                    <p className="text-light">- Support, maintenance and upgrade services</p>
                                </div>
                                <div className="skill">
                                    <h6 className="text-light">Skill</h6>
                                    <p className="text-light">Digital Marketing & Consulting, Search Engine Optimization, Social Media Markeitng, SMO, PPC, off-page SEO, Online Reputation, management, Enterprise SEO, Local SEO, Enterprise SEO, Ecommerce SEO.</p>
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
