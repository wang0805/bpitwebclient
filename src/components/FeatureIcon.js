import React, { Component } from "react";

class FeatureIcon extends Component {
  render() {
    let data = [
      {
        featureIcon: "feature-3.png",
        featureTitle: "Arbitrage Strategies",
        featureDescription:
          "Cross-market arbitrages in derivatives and physical market",
      },
      {
        featureIcon: "feature-9.png",
        featureTitle: "Physical Trading",
        featureDescription:
          "Purchase and Sale of physical precious and base metals",
      },
      {
        featureIcon: "feature-10.png",
        featureTitle: "Financing Solutions",
        featureDescription:
          "Hedging and trading solutions in the paper and physical market",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="feature">
            <div className="icon">
              <img
                src={`assets/img/icons/${val.featureIcon}`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="content">
              <h3 className="text-center">{val.featureTitle}</h3>
              <p className="text-center">{val.featureDescription}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*Feature section start*/}
        <div
          className={`feature-section section-space--inner--60 ${this.props.background}`}
        >
          <div className="container">
            <div className="col-lg-12">
              <div className="feature-item-wrapper">
                <div className="row">{Datalist}</div>
              </div>
            </div>
          </div>
        </div>
        {/*Feature section end*/}
      </div>
    );
  }
}

export default FeatureIcon;
