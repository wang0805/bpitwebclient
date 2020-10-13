import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
// import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.png" alt="" />
                    {/* <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="WEDIj9JBTC8"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span> */}
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to BPI Trading (SG) Pte Ltd</h3>
                    {/* <h1>50 Years of Experience in Industry</h1> */}
                    <p>
                      BPI Financial Group Limited (BPIF) is a boutique trading
                      company with a global presence
                    </p>
                    <h3>Mission</h3>
                    <p>
                      To strive for continuous improvement and establish
                      ourselves as one of the most reliable trading houses
                    </p>
                    <h3>Vision</h3>
                    <p>
                      To become one of the most efficient trading houses, adding
                      value to very participant in the value chain
                    </p>
                    <a
                      href="trading"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          {/* <FeatureIcon background="grey-bg" /> */}

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                {/* <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div> */}
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h3>
                      <span>Our Shareholders</span>
                    </h3>
                    <p>
                      Our parent company is BPI Financial Group Limited which is
                      part of a larger listed company in Hong Kong Stock
                      Exchange, Theme International Holdings Limited (990:HK)
                      <br />
                      <br />
                      Minority shareholders of BPIT includes one of the largest
                      privately owned steel mills in China, owner of the largest
                      iron ore and bulk commodities traders in China, as well as
                      the founder of one of the top trading firms in the iron
                      ore space
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <h3>
                      <span>Header2</span>
                    </h3>
                    <p>Writeup</p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          {/* <Funfact/> */}

          {/* Team member */}
          {/* <TeamMemberGrid /> */}

          {/* Testimonial Slider */}
          {/* <TestimonialSlider/> */}

          {/* Brand logo */}
          {/* <BrandLogoSlider background = "" /> */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
