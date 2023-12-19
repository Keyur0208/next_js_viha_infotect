import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import News from "@/app/components/news/page"
import Connect from "@/app/components/connect/page"

export const metadata = {
    title: "News & Article"
}

export default function News_article() {
    return (
        <main>
            <Bredcrump
                page_name="Blog"
                page_title='"Exploring The Softconic Blog"' />

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
                        </div>
                    </div>
                    <News />
                </div>
            </div>

            <Connect />
            
        </main>
    )
}
