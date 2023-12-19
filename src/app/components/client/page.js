import React from "react"

export default function Client() {

    const Client_details = (props) => {

        return (
            <div className="swiper-slide">
                <div className="clinet-suggestion">
                    <div className="client-details">
                        <div className="clinet-image">
                            <img
                                src={props.client_img}
                                alt=""
                            />
                        </div>
                        <div className="client-review">
                            <img
                                src={props.client_review_img}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="client-review-details">
                        <p>{props.client_approach}</p>
                    </div>
                    <div className="author-details">
                        <div className="author-contect">
                            <h4>{props.client_name}</h4>
                            <span>{props.client_indentify}</span>
                        </div>
                        <div className="clinet-quto-icon">
                            <img src={props.quto} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="side client-section-main">
            <div className="container p-lg-5 p-4" data-aos="fade-up">
                <div className="row g-5 pt-5 ">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="client-section">
                            <div className="client-section-titel">
                                <span>
                                    CLIENT REVIEW
                                </span>
                                <h1>Happy Client</h1>
                                <p>A testimonial is an honest endorsement of your product or service that usually comes
                                    fromf
                                    a customer, colleague, or peer who has benefited from or experienced success as a
                                    result
                                    of the work you did for them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">

                                <Client_details
                                    client_img="https://media.licdn.com/dms/image/C5603AQGY_oCxGQrp7g/profile-displayphoto-shrink_400_400/0/1592772435969?e=1706140800&v=beta&t=aGsqcotkz9qCyZT-IxhaaCehv6k1NXpzXG736IC9QmM"
                                    client_review_img="/asset 12.svg"
                                    client_approach="I wanted to thank Viha team for the fantastic job they did on my
                                 web app development project. I'm really proud to say that I've been
                                 working with you guys and can't wait to get connected for the new
                                 project in the future!"
                                    client_name="Purushotam Chhuchhiya"
                                    client_indentify="CEO | Sulok Digital Pvp Limited"
                                    quto="/asset 45.svg"
                                />

                                <Client_details
                                    client_img="https://media.licdn.com/dms/image/D4D35AQFXaiP1jNEmlw/profile-framedphoto-shrink_400_400/0/1690803058472?e=1703037600&v=beta&t=bGPvE_PXqxssIhaS6vandOg546WnGsTbfmJfQwAjYUY"
                                    client_review_img="/asset 12.svg"
                                    client_approach="We started our product development with Vihaa's team. In starting ,
                                 We are also worried about team performance and productivity . As
                                 time passes , We feel like we got our partner . They always ready to
                                 accept challenges and try their best to achieve goals. I am really
                                 satisfied with Vihaa's team work, dedications towards work, Culture
                                 and Co-operative environment."
                                    client_name="Khushbu Thummar"
                                    client_indentify="CEO | Sulok Digital Pvp Limited"
                                    quto="/asset 45.svg"
                                />

                                <Client_details
                                    client_img="/asset 46.png"
                                    client_review_img="/asset 12.svg"
                                    client_approach="Viha Infotech reached to what we expected from them to design and
                                    develop the application. They are very professional and a good team
                                    to design and are committed to complete the project with desired
                                    quality standards. They always provided daily updates and over
                                    scheduled meetings to keep us in loop with the development
                                    progress."
                                    client_name="Fedor, USA"
                                    client_indentify="CEO | P2P Network Fintech"
                                    quto="/asset 45.svg"
                                />

                                <Client_details
                                    client_img="/asset 47.png"
                                    client_review_img="/asset 12.svg"
                                    client_approach="I wanted to thank Vihaa team for the fantastic job they did on my
                                    web app development project. I'm really proud to say that I've been
                                    working with you guys and can't wait to get connected for the new
                                    project in the future!"
                                    client_name="Devarshi Desai | Studynash, Australia"
                                    client_indentify="CEO | P2P Network Fintech"
                                    quto="/asset 45.svg"
                                />

                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

