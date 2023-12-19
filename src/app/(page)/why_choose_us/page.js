import React from 'react'
import Bredcrump from '@/app/components/breadcrump/page'
import Development from '@/app/components/development/page'
import News from '@/app/components/news/page'
import Connect from '@/app/components/connect/page'
import './why_choose.css'

export const metadata = {
  title: "Why Choose"
}

export default function Why_chosse() {
  return (
    <main>
      <Bredcrump
        page_name="Why Us"
        page_title='"Why Choose Us"' />

      <div className="side" style={{ backgroundColor: "#121212", color: "white" }}  >
        <div className="container p-lg-5 p-3 ">
          <div className="row why-choose-main-section gy-5 pb-3" style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-right">
              <div className="experience-team" >
                <div className="experience-team-images-big">
                  <img
                    src="/why_choose(1).png"
                    alt="why_choose(1)" />
                </div>
                <div className="experience-team-images-sm">
                  <img
                    src="/why_choose(2).png"
                    alt="why_choose(2)" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-left">
              <div className="experience-team-details" >
                <div className="experience-team-span">
                  <span>EXPERIENCED TEAM</span>
                </div>
                <div className="experience-team-titel">
                  <h1>We’re a team of <span>20+ people</span>who are all Experts of what we do.</h1>
                  <p>We love what we do and the people we work with. Our team is half-split between
                    developers, designers, quality analysts and project managers. All of us who work at
                    Vihaa Infotech share the vision and values of our community. We are driven by the
                    idea that the best work is born when diligence mixes with fun and creativity mixes
                    with professionalism, which makes our process unique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-lg-5 p-3">
          <div className="row why-choose-secound-section gy-5" style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-right">
              <div className="quality-security">
                <div className="quality-security-span">
                  <span>QUALITY & SECURITY</span>
                </div>
                <div className="quality-security-titel">
                  <h1>Unlock the
                    <span>potential</span>
                    of your business.
                  </h1>
                  <p>We thoroughly test each part of your solution to ensure that the application is
                    fully functional and accurate, while satisfying the detailed business logic and
                    transformation rules. We will then conduct a code review, which is a systematic
                    examination of source code to identify any inaccuracies, ensuring the high
                    quality of the software. These code reviews ensure your code excludes any
                    vulnerability and will improve your software security and reliability.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-left">
              <div className="quality-security-image">
                <img
                  src="/why_choose(3).png"
                  alt="why_choose(3)" />
              </div>
            </div>
          </div>
        </div>
        <div className="container p-lg-5 p-3">
          <div className="row why-choose-third-section gy-5" style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-right">
              <div className="puncuality-image">
                <img
                  src="why_choose(4).png"
                  alt="why_choose(4)" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " data-aos="fade-left">
              <div className="puncuality">
                <div className="puncuality-span">
                  <span>puncuality</span>
                </div>
                <div className="puncuality-titel">
                  <h1>We understand importance of punctuality in software industry and we believe to
                    deliver high quality and secure products on time.</h1>
                  <p>We have good record to prepare project timeline and deliver work on defined timeline.
                    We have good track record in last 5 years. We haven’t delayed a single app/web
                    project in last 5 years. We have good combination of technical department and
                    management to make sure we are punctual for delivery and client meetings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


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
              <div className="col-12 col-sm-12  col-md-3 col-lg-3 col-xl-2">
                <div className="case-study-btn">
                  <a href="/news_article">View All Case</a>
                </div>
              </div>
            </div>
          </div>
          <News />
        </div>
      </div>
      <Development />
      <Connect />
    </main>
  )
}
