import React, { useEffect } from 'react'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";


function FormComponent(props: any) {
    const { conference } = props    
    return (
        <>
            <div className="mb-3">
                <label htmlFor="talkName" className="form-label">Talk name </label>
                <input type="text" onChange={props.updateName} className="form-control" id="talkName" placeholder="Create Flyers with React" />
            </div>
            <div className="mb-3">
                <label htmlFor="speakerName" className="form-label">Speaker name </label>
                <input type="text" onChange={props.updateSpeakerName}  className="form-control" id="speakerName" placeholder="John Doe" />
            </div>
            <div className="mb-3">
                <label htmlFor="speakLocation" className="form-label">Location </label>
                <input type="text" onChange={props.updateAddress}  className="form-control" id="speakLocation" placeholder="Address / Zoom / URL" />
            </div>
            <div className="mb-3">
                <label htmlFor="talkDate" className="form-label">Date and time </label>
                <Datetime onChange={props.updateDate} />
            </div>
            <div className="mb-3">
                <label htmlFor="talkName" className="form-label">Date </label>
                <select className="form-select" aria-label="Default select example">
                <option>Default</option>
                <option value="gdg">GDG</option>
                <option value="owasp">OWASP</option>
                </select>
            </div>  
        </>
    )
}

export default FormComponent
