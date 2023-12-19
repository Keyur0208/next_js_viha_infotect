import Bredcrump from "@/app/components/breadcrump/page"
import React from "react"
import './works.css'

export const metadata = {
    title: "Our Works"
}


export default function Our_works() {


    const Differnt_project = (props) => {

        return (
            <div className="all-projects-details" >
                <div className={props.project}>
                    <div className="all-projects-image">
                        <img
                            src={props.project_img}
                            className="w-100" />
                    </div>
                    <div className="work-content">
                        <h3>
                            <a href="#">
                                {props.project_title}
                            </a>
                        </h3>
                        <span>
                            {props.project_categories}
                        </span>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <main>
            <Bredcrump
                page_title='"Our Completed Projects"'
                page_name="Our Projects"
            />
            <div className="side project-section">
                <div className="container p-lg-5 p-3">
                    <div className="row pt-5 gy-4">
                        <div className="col-12">
                            <ul className="projects-menu">
                                <li className="list active-btn" data-filter="all">ALL</li>
                                <li className="list" data-filter="mobile">MOBILE</li>
                                <li className="list" data-filter="web">WEB</li>
                                <li className="list" data-filter="sharepoint">SHAREPOINT</li>
                                <li className="list" data-filter="ui-xi">UI/Xi</li>
                                <li className="list" data-filter="erp">ERP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 6.jpeg'
                                project_title="Vaikunth Inf"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 7.jpeg'
                                project_title="Cabraval"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 8.jpeg'
                                project_title="Cronulla"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 9.jpeg'
                                project_title="Tesc"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 10.jpeg'
                                project_title="Social"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 11.jpeg'
                                project_title="Astro"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 12.jpeg'
                                project_title="Astro"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 13.jpeg'
                                project_title="Coldrush"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 14.jpeg'
                                project_title="Dutch Buy And Sell Portal Website"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 15.jpeg'
                                project_title="An Eommerce Website For Shopping"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 16.jpeg'
                                project_title="LISD University"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 17.jpeg'
                                project_title="An Belt Certification Website With Event Calendars"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 18.jpeg'
                                project_title="Medicine & Urgent Care Clinic"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 19.jpeg'
                                project_title="Arabic Men Fashion Shopping Website"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 20.jpeg'
                                project_title="Advertising And Branding Blogging Website"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 21.jpeg'
                                project_title="Video Editor With Music, Motion And Movie App"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 22.jpeg'
                                project_title="Business Networking For The Entrepreneur"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 23.jpeg'
                                project_title="Free Chat, Audio & Video Call App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 24.jpeg'
                                project_title="Cloud Data Storage & Transfer By NAS"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 25.jpeg'
                                project_title="Step Counter Fitness Tracker"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 26.jpeg'
                                project_title="Bombay Mahal"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 27.jpeg'
                                project_title="Shafooh Online Buy & Sell App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 28.jpeg'
                                project_title="Online Food Order & Pickup App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 29.jpeg'
                                project_title="Create Profile App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 30.jpeg'
                                project_title="Autoparts Tires & Accessories Online Shopping App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="all-projects-details mobile">
                                <Differnt_project
                                    project="mobile"
                                    project_img='/project_images/asset 31.jpeg'
                                    project_title="Onilne Food Order App
                                Onilne Food Order App"
                                    project_categories="Mobile Developemnt"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 32.jpeg'
                                project_title="Dubai City Guide App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 33.jpeg'
                                project_title="Men & Youth Fashion Online Shopping App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 34.jpeg'
                                project_title="Crypto Currency Live Tracking & Comparison"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 35.jpeg'
                                project_title="Cocordia University Student Council App"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 36.jpeg'
                                project_title="Beurer HealthManager"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 37.jpeg'
                                project_title="A-Tuune - The Music Player"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 38.jpg'
                                project_title="Coldrush Logistics"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 39.jpeg'
                                project_title="Sgvp Aarogyam"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 40.jpeg'
                                project_title="The CAD Co"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 41.jpeg'
                                project_title="Nungu Diamonds"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 42.jpeg'
                                project_title="Wyld Card"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 43.jpeg'
                                project_title="Easy Mile Ui Design"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 44.jpeg'
                                project_title="Wyld Cardn"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 45.jpeg'
                                project_title="Neomoon"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 46.jpeg'
                                project_title="The CAD Co"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 47.jpeg'
                                project_title="Neomoon"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 48.jpeg'
                                project_title="Lexus Durian"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 49.jpeg'
                                project_title="Sgvp Aarogyam"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 50.jpeg'
                                project_title="92 Design"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 51.jpeg'
                                project_title="Aldaffah Store"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="web"
                                project_img='/project_images/asset 52.jpeg'
                                project_title="Studynas"
                                project_categories="Web Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="mobile"
                                project_img='/project_images/asset 53.jpeg'
                                project_title="Gem Bazaar Ui Design"
                                project_categories="Mobile Developemnt"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="sharepoint ui-xi"
                                project_img='/project_images/asset 54.jpeg'
                                project_title="Swot Voting"
                                project_categories="Dotnet Development"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <Differnt_project
                                project="sharepoint ui-xi"
                                project_img='/project_images/asset 55.jpeg'
                                project_title="Industry Leave & Expense Management System"
                                project_categories="Sharepoint Development"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="sharepoint ui-xi"
                                project_img='/project_images/asset 56.jpeg'
                                project_title="Oil Industry Management System"
                                project_categories="Sharepoint Development"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="sharepoint ui-xi"
                                project_img='/project_images/asset 57.jpeg'
                                project_title="TE Analytics Community"
                                project_categories="Sharepoint Development"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <Differnt_project
                                project="sharepoint erp"
                                project_img='/project_images/asset 38.jpg'
                                project_title="Oil Delivery And Stock Management"
                                project_categories="Sharepoint Development"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

