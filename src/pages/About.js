import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
// import Funfact from "../components/Funfact";
// import TeamMemberGrid from "../components/TeamMemberGrid";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
// import ModalVideo from "react-modal-video";
import ModalImage from "react-modal-image";

class About extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      open: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeLightbox() {
    this.setState({ open: !this.state.open });
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
                      BPI Trading (SG) is a trading company incorporated in 8th
                      August 2017 in Singapore. We trade mainly in precious and
                      base metals, and have developed a strong presence in Asia
                      and plan to expand globally
                    </p>
                    <h3>Mission</h3>
                    <p>
                      To strive for continuous improvement and establish
                      ourselves as one of the most reliable trading houses
                    </p>
                    <h3>Vision</h3>
                    <p>
                      To become one of the most efficient trading houses and
                      continously adding more value to the value chain
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
          <FeatureIcon background="grey-bg" />

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-lg-6 col-12 order-1 order-lg-2">
                  <div className="about-image-1">
                    {/* <img src="assets/img/about/bpitsg2.jpg" alt="" /> */}
                    <ModalImage
                      small="assets/img/about/bpitsg.png"
                      large="assets/img/about/bpitsg.png"
                      alt=""
                    />
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
                      Minority shareholders of BPIT includes but not limited to
                      one of the largest privately owned steel mills in China,
                      owner of the largest iron ore and bulk commodities trading
                      company in China
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
