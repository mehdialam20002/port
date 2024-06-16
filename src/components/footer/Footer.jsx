import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Mehdi</h1>
            <ul className="footer_list">
                <li><a href="#about" className="footer_link">About</a></li>

                <li><a href="#about" className="footer_link">Projects</a></li>


                <li><a href="#skills" className="footer_link">Skills</a></li>
            </ul>

            <div className="footer_social"> 
            <a href="https://www.facebook.com/mehdiAlam" className="footer_social-link" rel="noreferrer" target="_blank">
    <i className="bx bxl-facebook"></i>
</a>

<a href="https://www.instagram.com/mehdi___12_/" className="footer_social-link" rel="noreferrer"  target="_blank">

<i className="bx bxl-instagram"></i>
</a>

<a href="https://github.com/mehdialam20002" className="footer_social-link" rel="noreferrer"  target="_blank">
<i className="bx bxl-github"></i>
</a>

            
            
            </div>
            <span className='footer_copy'>
                 &#169; Mehdi. All rights reserver
            </span>
        </div>
    </footer>
  )
}

export default Footer