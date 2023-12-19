import React from "react"

export default function Form() {
    return (
        <form className="form-group">
            <div className="form-titel">
                <h1>Make a Free Consulting</h1>
            </div>
            <div className="form-details">
                <div className="row gy-4">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label  className="form-info">First Name</label>
                        <input type="text" className="form-box" required />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <label  className="form-info">Last Name</label>
                        <input type="text" className="form-box" required />
                    </div>
                </div>
                <div className="pt-3">
                    <label className="form-info">Company/Organization </label>
                    <input type="text" className="form-box" required />
                </div>
                <div className="pt-3">
                    <label  className="form-info">Email</label>
                    <input type="email" className="form-box" required inputMode="email" />
                </div>
                <div className="pt-3">
                    <label  className="form-info">Phone</label>
                    <input type="text" className="form-box" required inputMode="numeric"   />
                </div>
                <div className="pt-3">
                    <label  className="form-info">Message</label>
                    <textarea name="Message" id="Message" cols="20" rows="5"
                        className="form-box"></textarea>
                </div>
                <div className="pt-3">
                    <input type="submit" value="Submit" className="submit-btn" />
                </div>
            </div>
        </form>
    )
}

