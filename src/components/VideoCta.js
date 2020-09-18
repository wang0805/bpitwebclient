import React, { Component } from "react";
import ModalVideo from "react-modal-video";

class VideoCta extends Component {
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
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">ABOUT US</h4>
                  <h3 className="video-cta-content__title">
                    BPI Trading (SG) Pte Ltd
                  </h3>
                  <p className="video-cta-content__text">
                    BPT Trading was established in 2019 by a group of market
                    veterans who have been in the frontlines of precious and
                    base metals trading business for more than a decade. We have
                    established a network of trusted partners globally and
                    strives to create value and synergies in the trading market
                    space
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn ht-btn--round"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <div className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="WEDIj9JBTC8"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    {/* to use modal, delete this image tag and use 
                    the commented code below */}
                    <img
                      src="assets/img/backgrounds/video-cta.png"
                      className="img-fluid"
                      alt=""
                    />
                    {/* <button onClick={this.openModal}>
                      <div className="cta-video-image__image">
                        <img
                          src="assets/img/backgrounds/video-cta.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cta-video-image__icon">
                        <i className="ion-ios-play" />
                      </div>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
