import React from 'react'
import "./home.css"
function Data() {
  return (
    <div className="home_data">
        <h1 className="home_title">
            Mehdi Alam
        </h1>
        <h3 className="home_subtitle">Software Developer</h3>
        <p className="home_description">
            I'm a full Stack Developer (Django | React) and I am very passionate and dedicated to my work.
        </p>

        <a href="#contact" style={{marginTop:"22px"}} className='button button--flex'>
            Say Hello
        </a>
    </div>
  )
}

export default Data