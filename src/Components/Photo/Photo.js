import React, { Component } from 'react';
import '../App/App.css';
class Photo extends Component {
  render() {
    return (
      <div className="margin-photo p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
          
            <div clasclassNames="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/thumbnails/s1.jpg">
                <img className="img-fluid" src="img/portfolio/thumbnails/s1.jpg" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                      Categorie
                    </div>
                    <div className="project-name">
                    ACL
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div clasclassNames="col-lg-4 col-sm-6">
            <a className="portfolio-box" href="img/portfolio/thumbnails/s1.jpg">
              <img className="img-fluid" src="img/portfolio/thumbnails/s2.jpg" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                  Categorie
                  </div>
                  <div className="project-name">
                  ACL
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div clasclassNames="col-lg-4 col-sm-6">
          <a className="portfolio-box" href="img/portfolio/thumbnails/s1.jpg">
            <img className="img-fluid" src="img/portfolio/thumbnails/s3.jpg" alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                Categorie
                </div>
                <div className="project-name">
                  ACL
                </div>
              </div>
            </div>
          </a>
        </div>
        <div clasclassNames="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="img/portfolio/thumbnails/s1.jpg">
          <img className="img-fluid" src="img/portfolio/thumbnails/s4.jpg" alt="" />
          <div className="portfolio-box-caption">
            <div className="portfolio-box-caption-content">
              <div className="project-category text-faded">
              Categorie
              </div>
              <div className="project-name">
                ACL
              </div>
            </div>
          </div>
        </a>
      </div>
      <div clasclassNames="col-lg-4 col-sm-6">
      <a className="portfolio-box" href="iimg/portfolio/thumbnails/s1.jpg">
        <img className="img-fluid" src="img/portfolio/thumbnails/s1.jpg" alt="" />
        <div className="portfolio-box-caption">
          <div className="portfolio-box-caption-content">
            <div className="project-category text-faded">
            Categorie
            </div>
            <div className="project-name">
              ACL 
            </div>
          </div>
        </div>
      </a>
    </div>
    <div clasclassNames="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="img/portfolio/thumbnails/s1.jpg"uti>
                <img className="img-fluid" src="img/portfolio/thumbnails/s2.jpg" alt="" />
                <div className="portfolio-box-caption">
                  <div className="portfolio-box-caption-content">
                    <div className="project-category text-faded">
                    Categorie
                    </div>
                    <div className="project-name">
                      ACL
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
export default Photo;

