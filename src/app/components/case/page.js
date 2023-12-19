import React from "react"

export default function Case() {

    const Case_study = (props) => {
        return (
            <div className={props.direction} >
                <div data-aos={props.data_animation}>
                    <div className={props.img_direction}>
                        <img src={props.img} alt="" className="w-100" />
                    </div>
                    <div className="case-study-details">
                        <h3>{props.title}</h3>
                        <h1><a href="">{props.sub_title} </a></h1>
                        <p>{props.dec}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="row pt-5 g-0" style={{ overflowX: 'hidden' }}>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <Case_study
                    direction="case-study-left-upper"
                    data_animationanimation="fade-right"
                    img_direction="case-study-left-image-top"
                    img="/asset 39.png"
                    title="WEB DEVELOPMENT"
                    sub_title="WYLD - Buy Post And Earn"
                    dec="WYLD is India's 1st social currency card for influencers to encash their influence.With  help of app influencer get discount on brands offers plus get extra rewards from  WYLD  community to convert into cash with virtual credit card."
                />
                <Case_study
                    direction="case-study-left-down"
                    data_animationanimation="fade-right"
                    img_direction="case-study-left-image-down"
                    img="/asset 40.png"
                    title="MOBILE DEVELOPMENT"
                    sub_title="Neomoon"
                    dec="Neomoon le ofrece a todos los latinoamericanos la oportunidad de tener una cuenta en dólares a su nombre. Sin papeleo burocrático, sin monto mínimo de apertura, y sin tener que salir de tu casa."
                />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <Case_study
                    direction="case-study-right-upper"
                    data_animationanimation="fade-left"
                    img_direction="case-study-right-image-top"
                    img="/asset 41.png"
                    title="IT CONSULTING"
                    sub_title="Studynash"
                    dec="Studynash is an Ed-tech startup that is changing the way you study abroad. We connect you with current international students who can provide the most transparent advice about the course and the university you wish to pursue. Moreover, allows you to apply to multiple universities through Studynash Portal easily and quickly."
                />
                <Case_study
                    direction="case-study-right-down"
                    data_animationanimation="fade-left"
                    img_direction="case-study-right-image-top"
                    img="/asset 42.png"
                    title="CONFIGURATOR"
                    sub_title="3D Configurator"
                    dec="3D Configurators improve the online shopping experience by allowing consumers to see products from every angle and even in different settings. This is a tool that allows you to customize colors, animate functionality, and experience a product before buying it without the need to see it in person."
                />
            </div>
        </div>
    )
}
