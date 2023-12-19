import React from "react"
import Link from "next/link"

export default function Bredcrump(props) {

    return (
        <div className="about-main-section side">
            <div className="container p-lg-5 p-3">
                <section className="breadcrumbs">
                    <div className="breadcrumb-sm-images">
                        <div className="inner-banner-1">
                            <img
                                src="/inner-banner-1 (1).png"
                                alt="inner banner"
                            />
                        </div>
                        <div className="inner-banner-2 ">
                            <img
                                src="/aboutus-banner-image.png"
                                alt="aboutus"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-wrapper" >
                                    <div className="breadcrumb-cnt">
                                        <span>{props.page_name}</span>
                                        <h1>{props.page_title}</h1>
                                        <div className="breadcrumb-list">
                                            <Link href="/">Home</Link>
                                            <img
                                                src="/arrow.svg"
                                                alt="breadcrumb arrow" />
                                            {props.page_name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


