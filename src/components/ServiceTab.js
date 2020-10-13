import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      {
        iconName: "flaticon-commodity",
        tabMenuName: "Trading",
      },
      { iconName: "flaticon-cash-flow", tabMenuName: "Arbitrage" },
      { iconName: "flaticon-stock-market", tabMenuName: "Financing" },
      { iconName: "flaticon-earth-globe", tabMenuName: "Others" },
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service1.png",
        contentTitle: "Trading",
        contentDesc:
          "With the experience of the team, we strive to create value to the whole commodity chain and fuel the expansion and financial growth of the sector worldwide",
        serviceLink: "trading",
      },
      {
        bgUrl: "service2.png",
        contentTitle: "Arbitrage",
        contentDesc:
          "Our team has vast experience and the know-how in identifying market inefficiencies between various markets and/or exchanges such as Shanghai Futures Exchange, Comex, LME, LBMA, etc and capitalizing them quickly. We are also able to facilitate the entire value chain from derivatives hedges to physical cargo sales to end clients",
        serviceLink: "arbitrage",
      },
      {
        bgUrl: "service3.png",
        contentTitle: "Financing",
        contentDesc:
          "Our team offers a wide range of flexible financing structure and customized trade finance solutions for our end clients. Our services ranges from plain vanilla inventory financing strutures to complex cross-border financing structures involving multiple counterparties",
        serviceLink: "financing",
      },
      {
        bgUrl: "service4.png",
        contentTitle: "Others",
        contentDesc: "Coming Soon",
        serviceLink: "others",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              {/* <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a> */}
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Services <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
