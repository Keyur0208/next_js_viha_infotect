import React from "react"
import Bredcrump from "@/app/components/breadcrump/page"
import './contact.css'
import Form from "@/app/components/form/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

export const metadata = {
    title: "Contact"
}

export default function contact() {
    return (
        <main>
            <Bredcrump
                page_title='"For Any Querry"'
                page_name="Contact"
            />
            <div className="side contact-main-section">
                <div className="container p-lg-5 p-3">
                    <div className="row contact-section gy-5">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="contact-section-heading">
                                <span>
                                    CONTACT WITH US
                                </span>
                            </div>
                            <div className="contact-section-titel">
                                <h2>
                                    LET’S WORK TOGETHER?
                                </h2>
                                <p>
                                    I have worls-className, flexible support via live chat, email and hone. I guarantee that
                                    you’ll be able to have any issue resolved within 24 hours.
                                </p>
                            </div>
                            <div className="contact-section-icon">
                                <div className="single-info">
                                    <div className="single-icon">
                                        <FontAwesomeIcon icon={faLocationDot} className="single-fonticon" />
                                    </div>
                                    <span>B-308, Ganesh glory 11, Jagatpur Rd, S.G. Highway, Ahmedabad 382481</span>
                                </div>
                                <div className="single-info">
                                    <div className="single-icon">
                                        <FontAwesomeIcon icon={faPhone} className="single-fonticon" />
                                    </div>
                                    <a href="tel:+91 79845 29286">+91 79845 29286</a>
                                </div>
                                <div className="single-info">
                                    <div className="single-icon">
                                        <FontAwesomeIcon icon={faEnvelope} className="single-fonticon" />
                                    </div>
                                    <a href="mailto:info@vihaainfotech.com">info@vihaainfotech.com</a>
                                </div>
                            </div>
                            <div className="contact-section-follow">
                                <h1>Follow Us</h1>
                                <h5>Follow us on Social Network</h5>
                                <div className="social-media-icon">
                                    <Link href=''>
                                        <FontAwesomeIcon icon={faFacebookF} className="social-media-fonticon" />
                                    </Link>
                                    <Link href=''>
                                        <FontAwesomeIcon icon={faInstagram} className="social-media-fonticon" />
                                    </Link>
                                    <Link href=''>
                                        <FontAwesomeIcon icon={faTwitter} className="social-media-fonticon" />
                                    </Link>
                                    <Link href=''>
                                        <FontAwesomeIcon icon={faLinkedinIn} className="social-media-fonticon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <Form />
                        </div>
                    </div>
                </div>
                {/* <!-- Map --> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.615422603645!2d72.87544197503661!3d21.207431080486973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7500e94fc9%3A0xfb81a3aa6b5d7a70!2sBalKrishna%20Society%2C%20Near%20Shishu%20Kunj%20School%2C%20Balmukund%20Society%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1700469523892!5m2!1sen!2sin"
                    allowfullscreen="" loading="lazy" height={500}
                    className="w-100 map" referrerPolicy="no-referrer-when-downgrade" >
                </iframe>
            </div>
        </main>
    )
}
