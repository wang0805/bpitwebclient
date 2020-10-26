import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { withTranslation } from "react-i18next";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: "en" };
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  handleClick = (x) => {
    let value = x;
    this.setState((prevState) => ({ lang: value }));
    this.props.i18n.changeLanguage(value);
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}

            {/*=======  End of header top bar  =======*/}

            {/*=======  header info area  =======*/}
            <div
              style={{
                position: "fixed",
                top: 15,
                right: 15,
                zIndex: 2,
                padding: "10px 10px",
                backgroundColor: "#282460",
                borderRadius: "5px",
                opacity: "50%",
              }}
            >
              <div
                className="mobile-navigation-icon"
                id="mobile-menu-trigger"
                onClick={this.activeMobileMenu}
              >
                <i />
              </div>
            </div>
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area default-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* header navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                {" "}
                                {t("home")}{" "}
                              </Link>
                            </li>
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/home`}>
                                {" "}
                                {t("home")}{" "}
                              </Link> 
                            <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-one`}
                                  >
                                    Homepage One
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-two`}
                                  >
                                    Homepage Two
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-three`}
                                  >
                                    Homepage Three
                                  </Link>
                                </li>
                              </ul> 
                            </li>*/}
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/about-us`}>
                                {t("about")}
                              </Link>
                            </li>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/trading`}>
                                {t("service")}
                              </Link>
                            </li>
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/trading`}>
                                {t("service")}
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/trading`}
                                  >
                                    Trading
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/arbitrage`}
                                  >
                                    Arbitrage
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/financing`}
                                  >
                                    Financing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
                                  >
                                    Service Details Right Sidebar
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/projects`}>
                                PROJECT
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/projects`}
                                  >
                                    Project Page
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/project-details`}
                                  >
                                    Project Details
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link
                                to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
                              >
                                BLOG
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
                                  >
                                    Blog Left Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
                                  >
                                    Blog Right Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}
                                  >
                                    Blog Details Left Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}
                                  >
                                    Blog Details Right Sidebar
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/contact-us`}>
                                {t("contact")}
                              </Link>{" "}
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default withTranslation("translations")(NavBar);
