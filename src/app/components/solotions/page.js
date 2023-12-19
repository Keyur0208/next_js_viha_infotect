import React from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import './solution.css'

export default function Solutions() {

    const Solutions_card = (props) => {
        return (
            <div className="card solution_card">
                <div className="card-body">
                    <div className={props.bg_img}>
                        <img src={props.img} />
                    </div>
                    <div className="solution-card-body">
                        <div className="solution-card-titel">
                            <h4>
                                <Link href={props.path}>{props.title} </Link>
                            </h4>
                        </div>
                        <div className="solution-card-content">
                            <p>{props.des}</p>
                        </div>
                        <div className="learn-btn">
                            <div>
                                <Link href={props.path}>Learn More
                                    <FontAwesomeIcon icon={faArrowRight} className="learn-btn-arrow" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="solution_section side" style={{ overflow: 'hidden' }}>
            <div className="container" data-aos="fade-up"  >
                <div className="service">
                    <div className="service_titel">
                        <span>
                            SOLUTIONS WE OFFER
                        </span>
                        <h1>Services & Solutions</h1>
                    </div>
                </div>
                <div className="service_feature">
                    <div className="container">
                        <div className="row g-4 " style={{ paddingBottom: "7rem" }}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title="Mobile App Development"
                                    des="Autonomous and effective mobile application solutions for defined scope"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-1"
                                    path="/mobile_development" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title="Web App Development"
                                    des="Custom web programming for most complex functions you can think"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-2"
                                    path="/web_development"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title="SharePoint Development"
                                    des="Custom web programming for most complex functions you can think"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-3"
                                    path="/sharepoint"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title=".Net Development"
                                    des="Transformative and streamlied software development with scalability"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-4"
                                    path="/dontnet"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title="UI/UX Design & Development"
                                    des="Transformative and streamlied software development with scalability"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-5"
                                    path="/ul_xi_development"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                <Solutions_card
                                    title="SEO & Digital Marketing"
                                    des="Brand strategy that optimizing your web business to rank on the first page of google"
                                    img="/asset 16.svg"
                                    bg_img="solution_icon-6"
                                    path="/seo_marketing"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

