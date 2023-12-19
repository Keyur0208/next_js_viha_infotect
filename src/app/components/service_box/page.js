import React from "react"
import Link from "next/link"

export default function Service_box() {
    return (
        <>
            <div className="side" style={{ backgroundColor: '#121212', color: 'white' }}>
                <div className="container p-lg-5 p-3">
                    <div className="text-center sevices-btns ">
                        <div className="view-btn">
                            <Link href="/mobile_development">
                                Mobile App Development
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/web_development">
                                Web App Development
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/sharepoint">
                                SharePoint Design Development
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/dontnet">
                                Dotnet Development
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/ul_xi_development">
                                UIXI Design Development
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/seo_marketing">
                                SEO And Digital Marketing
                            </Link>
                        </div>
                        <div className="view-btn">
                            <Link href="/quality" >
                                Quality Assurance
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}