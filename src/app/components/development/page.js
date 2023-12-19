import React from "react"

export default function Development() {
    return (
        <div className="side pb-5 pt-5 developement-section-main">
            <div className="container p-lg-5 p-3 ">
                <div className="developement-section" data-aos="fade-up">
                    <div className="work-section-titel">
                        <span>HOW WE WOR</span>
                        <h1>Development Process</h1>
                    </div>
                </div>
                <div className="award-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <td>Process</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Awwards">Define Scope
                                    <img 
                                    src="/asset 48.svg" 
                                    className="award-image" 
                                    alt="Define Scope" 
                                    />
                                </td>
                                <td>During The Inception Phase, the them at
                                    vihaainfotech works diligently to discover everything about our clients
                                    business.
                                </td>
                            </tr>
                            <tr>
                                <td className="Awwards">Code Development
                                    <img 
                                    src="/asset 49.svg" 
                                    className="award-image" 
                                    alt="Code Development" 
                                    />
                                </td>
                                <td >The goal of our team of developers is to create the
                                    best possible user experience for our clients customers.
                                </td>
                            </tr>
                            <tr>
                                <td className="Awwards">Design Objects
                                    <img 
                                    src="/asset 50.svg" 
                                    className="award-image"
                                    alt="Design Objects" 
                                    />
                                </td>
                                <td>Our in-house creative artists begin by identifying
                                    valuable existing content and start developing the visual brand.</td>
                            </tr>
                            <tr>
                                <td className="Awwards">Quality Check
                                    <img 
                                    src="/asset 51.svg" 
                                    className="award-image" 
                                    alt="Quality Check" 
                                    />
                                </td>
                                <td>After construction our favorite process checkpoint
                                    comes and we debugging lines of code, and writing content.</td>
                            </tr>
                            <tr>
                                <td className="Awwards">Deployment
                                    <img 
                                    src="/asset 52.svg" 
                                    className="award-image" 
                                    alt="Deployment" 
                                    />
                                </td>
                                <td>Once the project goes live, we run though a final
                                    test to confirm everything that we built is best functioning as intended
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

