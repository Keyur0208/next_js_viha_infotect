import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import Connect from "@/app/components/connect/page"

export const metadata = {
    title: "Team"
}

export default function Our_team() {

    const Team_member = (props) => {
        return (
            <div className="member-details" data-aos="fade-up">
                <div className="member-image">
                    <img src={props.team_member_img} className="w-100" alt="Image" />
                </div>
                <div className="member-work-details">
                    <h3>{props.team_member_name}</h3>
                    <h4>{props.team_member_role}</h4>
                </div>
            </div>
        )
    }

    return (
        <main>
            <Bredcrump
                page_title='"Meet Our Expertis"'
                page_name="Team"
            />
            <div className="side team-section">
                <div className="container p-lg-5 p-3">
                    <div className="row gy-5 team-details">
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Vivek.jpg"
                                team_member_name="Vivek Lunagariya"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Senha.jpg"
                                team_member_name="Sneha Pansuriya"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Sir.jpg"
                                team_member_name="Purushotam Chhuchhiya"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Khushbu.jpg"
                                team_member_name="Khushbu Thummar"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Birjesh.JPG"
                                team_member_name="Bijesh Bagsaria"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/chandni.jpg"
                                team_member_name="Chandani Thummar"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/WhatsApp Image 2023-11-20 at 19.53.17_371c79bc.jpg"
                                team_member_name="Sagar Thummar"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/deep.jpg"
                                team_member_name="Deep Pansuriyar"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Sakti.jpg"
                                team_member_name="Sakti Varsani"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Divya.jpg"
                                team_member_name="Divya Varsani"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/pooja.jpg"
                                team_member_name="Pooja Varsani"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/Mishri.jpg"
                                team_member_name="Mishri Bagsaria"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-0 col-xl-3">
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/nirali.jpg"
                                team_member_name="Nirali Sojitra"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-3">
                            <Team_member
                                team_member_img="/mihir.jpg"
                                team_member_name="Mihir Sojitra"
                                team_member_role="CEO,Founder"
                            />
                        </div>
                        <div className="col-12 col-sm-12 col-md-0 col-xl-3">
                        </div>
                    </div>
                </div>
            </div>
            <Connect />
        </main>
    )
}
