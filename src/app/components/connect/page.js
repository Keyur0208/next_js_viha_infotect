import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


export default function Connect() {

    return (
        <>
            <div className="side about-work-main-section">
                <div className="container p-lg-5 p-3">
                    <div className="row about-work-section">
                        <div className="col-12 text-center">
                            <div className="about-work-section-titel">
                                <h2>WORK WITH US</h2>
                                <h1>LET’S TALK</h1>
                            </div>
                            <div className="about-work-btn">
                                <Link href="/contact" >
                                    Contact With Us.
                                    <FontAwesomeIcon icon={faArrowRight} className="arrow-animation" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
