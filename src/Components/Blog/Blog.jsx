import React from "react";
import PostCard from "./PostCard";
import blogImg1 from "../../assets/img/blog/blog_1.jpg";
import blogImg2 from "../../assets/img/blog/blog_2.jpg";
import blogImg3 from "../../assets/img/blog/blog_3.jpg";
import blogImg4 from "../../assets/img/blog/blog_4.jpg";
import blogImg5 from "../../assets/img/blog/blog_5.jpg";
import authorimg1 from "../../assets/img/person/person_1.jpg";
import authorimg2 from "../../assets/img/person/person_2.jpg";
import authorimg4 from "../../assets/img/person/person_4.jpg";
import authorimg3 from "../../assets/img/person/person_3.jpg";
import Pagenation from "./Pagenation";
import SidebarSearch from "./SidebarSearch";
import SidebarCat from "./SidebarCat";
import SidebarRecent from "./SidebarRecent";
import SidebarTag from "./SidebarTag";
const Blog = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <PostCard
                title="List of Countries without Coronavirus case"
                category="Covid19"
                postthumb={blogImg1}
                authorimg={authorimg1}
                authorname="Roger Adams"
                posttime="1 week ago"
              />
              <PostCard
                title="What is the impact of eating too much sugar?"
                category="Dental"
                postthumb={blogImg3}
                authorimg={authorimg4}
                authorname="Wizdom Jack"
                posttime="2 weeks ago"
              />
              <PostCard
                title="Shifting goalposts: Research in the time of the
                        coronavirus"
                category="Covid19"
                postthumb={blogImg3}
                authorimg={authorimg3}
                authorname="Adams Collie"
                posttime="4 weeks ago"
              />
              <PostCard
                title=" What are the nonmedical factors most closely linked to
                        death risk?"
                category="Neurology"
                postthumb={blogImg4}
                authorimg={authorimg1}
                authorname="Roger Adams"
                posttime="4 weeks ago"
              />
              <PostCard
                title=" Do gut bacteria contribute to ethnic health disparities"
                category="Cardiology"
                postthumb={blogImg5}
                authorimg={authorimg1}
                authorname="Roger Adams"
                posttime="4 weeks ago"
              />
              <PostCard
                title="The Recovery Room: News beyond the pandemic"
                category="Patient Services"
                postthumb={blogImg1}
                authorimg={authorimg1}
                authorname="Roger Adams"
                posttime="1 month ago"
              />
              <PostCard
                title="Racism in mental healthcare: An invisible barrier"
                category="General Health"
                postthumb={blogImg1}
                authorimg={authorimg1}
                authorname="Roger Adams"
                posttime="2 month ago"
              />
              <PostCard
                title="COVID-19 live updates: Total number of cases passes 11.6
                        million"
                category="Covid19"
                postthumb={blogImg2}
                authorimg={authorimg2}
                authorname="Diego Simmons"
                posttime="4 weeks ago"
              />

              <Pagenation />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <SidebarSearch />
              <SidebarCat />
              <SidebarRecent />
              <SidebarTag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
