import React from "react";
import blogimg1 from "../../assets/img/blog/blog_1.jpg";
import blogimg2 from "../../assets/img/blog/blog_2.jpg";
import blogimg3 from "../../assets/img/blog/blog_3.jpg";
import authorimg1 from "../../assets/img/person/person_1.jpg";
import authorimg2 from "../../assets/img/person/person_2.jpg";
import authorimg3 from "../../assets/img/person/person_3.jpg";
const Latestnews = () => {
  return (
    <div className="page-section bg-light">
      <div className="container">
        <h1 className="text-center wow fadeInUp">Latest News</h1>
        <div className="row mt-5">
          <div className="col-lg-4 py-2 wow zoomIn">
            <div className="card-blog">
              <div className="header">
                <div className="post-category">
                  <a href="/">Covid19</a>
                </div>
                <a href="blog-details.html" className="post-thumb">
                  <img src={blogimg1} alt="" />
                </a>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="blog-details.html">
                    List of Countries without Coronavirus case
                  </a>
                </h5>
                <div className="site-info">
                  <div className="avatar mr-2">
                    <div className="avatar-img">
                      <img src={authorimg1} alt="" />
                    </div>
                    <span>Roger Adams</span>
                  </div>
                  <span className="mai-time"></span> 1 week ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 wow zoomIn">
            <div className="card-blog">
              <div className="header">
                <div className="post-category">
                  <a href="/">Covid19</a>
                </div>
                <a href="blog-details.html" className="post-thumb">
                  <img src={blogimg2} alt="" />
                </a>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="blog-details.html">
                    Recovery Room: News beyond the pandemic
                  </a>
                </h5>
                <div className="site-info">
                  <div className="avatar mr-2">
                    <div className="avatar-img">
                      <img src={authorimg2} alt="" />
                    </div>
                    <span>Roger Adams</span>
                  </div>
                  <span className="mai-time"></span> 4 weeks ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2 wow zoomIn">
            <div className="card-blog">
              <div className="header">
                <div className="post-category">
                  <a href="/">Covid19</a>
                </div>
                <a href="blog-details.html" className="post-thumb">
                  <img src={blogimg3} alt="" />
                </a>
              </div>
              <div className="body">
                <h5 className="post-title">
                  <a href="blog-details.html">
                    What is the impact of eating too much sugar?
                  </a>
                </h5>
                <div className="site-info">
                  <div className="avatar mr-2">
                    <div className="avatar-img">
                      <img src={authorimg3} alt="" />
                    </div>
                    <span>Diego Simmons</span>
                  </div>
                  <span className="mai-time"></span> 2 months ago
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 text-center mt-4 wow zoomIn">
            <a href="blog.html" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestnews;
