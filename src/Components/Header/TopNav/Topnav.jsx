import React from 'react'

const Topnav = () => {
  return (
       <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-sm">
            <div className="site-info">
              <a href="/"><span className="mai-call text-primary"></span> +00 123 4455 6666</a>
              <span className="divider">|</span>
              <a href="/"><span className="mai-mail text-primary"></span> mail@example.com</a>
            </div>
          </div>
          <div className="col-sm-4 text-right text-sm">
            <div className="social-mini-button">
              <a href="/"><span className="mai-logo-facebook-f"></span></a>
              <a href="/"><span className="mai-logo-twitter"></span></a>
              <a href="/"><span className="mai-logo-dribbble"></span></a>
              <a href="/"><span className="mai-logo-instagram"></span></a>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )
}

export default Topnav
