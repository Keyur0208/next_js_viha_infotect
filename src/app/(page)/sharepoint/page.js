import Bredcrump from '@/app/components/breadcrump/page'
import Connect from '@/app/components/connect/page'
import Service_box from '@/app/components/service_box/page'
import React from 'react'


export const metadata = {
  title: "SharePoint Design & Development"
}

export default function Services() {
  return (
    <main>
      <Bredcrump
        page_name="Services Details"
        page_title='"SharePoint Design & Development"' />
      <div className='service-main-section' >

        <div className="side">
          <div className="container p-lg-5 p-3">
            <div className="row services-section">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="services-section-titel">
                  <span>
                    SERVICES DETAILS
                  </span>
                  <h1>SharePoint Design & Development</h1>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 pt-0 pt-lg-5">
                <img src="service_section/sharepoint/sharepoint-design-development.png" 
                className="w-100"
                 alt="" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                <div className="choose-left-content">
                  <div className="choose-left-vector">
                    <img
                      src="/box2.svg"
                      className="choose-left-vector-down"
                      alt="" />
                    <img
                      src="/box.svg"
                      className="choose-left-vector-top"
                      alt="" />
                  </div>
                  <div className="choose-icon">
                    <img 
                    src="service_section/sharepoint/sharepoint.png" 
                    alt="" />
                  </div>
                  <br></br>
                    <h4>SharePoint Design & Development</h4>
                    <span>Delivering High End Sharepoint Solutions that makes sharing, organizing & Managing business for global enterprise</span>
                    <p>Vihaa INfotech Logic is a dominant SharePoint development service provider in India. With a skilled and expert team, the company is able to take care of all the needs of the clients when it is about portal definition and planning, Database Design, business process analysis, enterprise content management, technology implementation, Product Development, support document and many more.</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                <div className="choose-right-content">
                  <div className="single-feacture">
                    <div className="progressbar">
                      <h1>
                        <span className="counter" keyur="37">0</span>%
                      </h1>
                    </div>
                    <div className="content">
                      <h3>EXPERTISE LEVEL</h3>
                    </div>
                  </div>
                  <div className="feacture-details">
                    <h6 className="text-light">Our Advantages</h6>
                    <p className="text-light">- Long-term Business Relationship</p>
                    <p className="text-light">- Innovative Solutions</p>
                    <p className="text-light">- Transparent Work Process</p>
                    <p className="text-light">- Reliable architecture</p>
                    <p className="text-light">- Expert Team Guidance</p>
                    <p className="text-light">- Ready to Sign an NDA</p>
                  </div>
                  <div className="skill">
                    <h6 className="text-light">Skill</h6>
                    <p className="text-light">Product Development, Research & Development, Automation, Migration, Ecommerce, Database Design, Testing, SharePoint Online Portal, Intranet Portal, Extranet Portal, Salesforce, SharePoint Maintenance Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service_box />
      <Connect />
    </main>

  )
}
