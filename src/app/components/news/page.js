import React from "react"

export default function News() {

    const News_section = (props) => {
        return (
            <div className="news-section-card-1">
                <div className="news-section-details">
                    <div className="news-section-date">
                        <p>April 05,2023</p>
                    </div>
                    <div className="card-link">
                        <a href="./News-Artits/news_articals.html">{props.link}</a>
                    </div>
                </div>
                <div className="news-section-titel">
                    <h2>{props.news_title}</h2>
                    <p>
                        {props.news_dec}
                    </p>
                </div>
                <div className="news-section-image">
                    <img src={props.news_img}
                        alt=""
                        className="w-100" />
                </div>
            </div>
        )
    }

    return (
        <div className="row  gy-5  pt-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <News_section
                    link="Software Developement"
                    news_title="What Is Git"
                    news_dec="Git is a mature, actively maintained open source project originally developed in
                            2005 by Linus Torvalds, Git is a free and open source distributed version
                            control system."
                    news_img="/asset 56.png"
                />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <News_section
                    link="Software Developement"
                    news_title="What Is GitHub Copilot"
                    news_dec=" GitHub Copilot is an AI pair programmer that helps you write code faster and with
                            less work. It draws context from comments and code to suggest individual lines and
                            whole functions instantly."
                    news_img="/asset 57.png"
                />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                <News_section
                    link="Software Developement"
                    news_title="Vue Js Better Than ReactJS?"
                    news_dec=" VueJS is two-way binding; whereas ReactJS is one-way binding and that's why VueJs
                            uses more computer resources than ReactJS. Moreover, looking at the learning curve."
                    news_img="/asset 53.png"
                />
            </div>
        </div>
    )
}
