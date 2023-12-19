import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import Case from "@/app/components/case/page"
import './case.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Connect from "@/app/components/connect/page"


export const metadata = {

    title: "Case Study"
}

export default function Case_study() {
    return (
        <main>
            <Bredcrump
                page_name="Case Study"
                page_title='"From Challenge To Triumph"' />
            <div className="side case-study-section ">
                <div className="container p-lg-5 p-3 ">
                    <Case />
                    <div className="case-study-pagination">
                        <a href="#" id="disabled">
                            <FontAwesomeIcon icon={faArrowLeft} className="left_arrow_pagination" />
                        </a>
                        <a href="#" id="data">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRight} className="right_arrow_pagination" />
                        </a>
                    </div>
                </div>
            </div>
            <Connect />

        </main>
    )
}
