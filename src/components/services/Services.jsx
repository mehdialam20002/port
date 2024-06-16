import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const[toggleState,setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
  return (

<section className="services section" id='services'>
    <h2 className="section_title">Services</h2>
    <span className="section_subtitle">What i offer</span>

<div className="services_container container grid">









    <div className="services_content">
        <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">Product <br /> Designer</h3>
        </div>
        <span className="services_button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>

<div className={toggleState===1 ? "services_modal active-modal": "services_modal"}>
    <div className="services_modal-content">
    <i onClick={()=>toggleTab(1)} className="uil uil-times services_modal-close"></i>
        <h3 className="services_modal-title">Contact Me</h3>
        <p className="services_modal-description">Contact us for quality Work.</p>

        <ul className="services_modal-services grid">
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Develop the user interface.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Web Page development.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">responsive WebPages.</p>
            </li>
        </ul>
    </div>
</div>

    </div>






    <div className="services_content">
        <div>
            <i className="bx bxl-bootstrap" style={{fontSize: "40px"}}></i>
            <h3 className="services_title">FrontEnd <br /> Designer</h3>
        </div>
        <span className="services_button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>

<div className={toggleState===2 ? "services_modal active-modal": "services_modal"}>
    <div className="services_modal-content">
    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
        <h3 className="services_modal-title">Ui/Ux</h3>
        <p className="services_modal-description">Contact us for quality Work.</p>

        <ul className="services_modal-services grid">
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Develop the user interface.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Web Page development.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">responsive WebPages.</p>
            </li>
        </ul>
    </div>
</div>

    </div>















    <div className="services_content">
        <div>
            <i className="bx bxl-django" style={{fontSize:"40px"}}></i>
            <h3 className="services_title">Backend <br /> Developer</h3>
        </div>
        <span className="services_button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services_button_icon"></i></span>

<div className={toggleState===3 ? "services_modal active-modal": "services_modal"}>
    <div className="services_modal-content">
    <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
        <h3 className="services_modal-title">RestApi</h3>
        <p className="services_modal-description">Contact us for quality Work.</p>

        <ul className="services_modal-services grid">
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Develop the user interface.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">Web Page development.</p>
            </li>
            <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">responsive WebPages.</p>
            </li>
        </ul>
    </div>
</div>

    </div>













</div>

</section>

  )
}

export default Services