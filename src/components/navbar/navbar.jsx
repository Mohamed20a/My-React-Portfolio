import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/coding.png';
import "../../style/style.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isBlurred: false,
    };
  }

  handleToggleOffcanvas = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
      isBlurred: !prevState.isVisible,
    }));
  };
  
  handleHideOffcanvas = () => {
    this.setState({ isVisible: false, isBlurred: false });
  };

  render() {
    const { isVisible, isBlurred } = this.state;

    return (
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2 style={{fontfamily: 'toyor-aljanah', color: 'rgb(131 219 255/1)'}}> Mohamed <img style={{ width: '35px' }} src="https://img.icons8.com/fluency/48/source-code.png" alt="شعار الموقع" /> </h2>
          </Link>
          <button
        className={`navbar-toggler ${isVisible ? "active" : ""}`}
        type="button"
        onClick={this.handleToggleOffcanvas}
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div
            className={`offcanvas offcanvas-end ${isVisible ? 'show' : ''}`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                className="button1"
                onClick={this.handleHideOffcanvas}
                aria-label="Close"
              >
                {/* <span className="X"><i class="fa-solid fa-xmark"></i></span> */}
                {/* <span className="Y"></span> */}
                <i id="close" class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="offcanvas-body">
            <ul
                className="navbar-nav justify-content-end flex-grow-1 pe-3"
                onClick={() => {
                  this.handleHideOffcanvas();
                  this.setState({ isBlurred: false });
                }}
              >
                <li className="nav-item">
                  <Link className="nav-link" to="/" >
                    <span className="num">01</span>
                    <p>// &nbsp; Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <span className="num">02</span>
                    <p>// &nbsp; About</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project">
                    <span className="num">03</span>
                    <p>// &nbsp; Projects</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    <span className="num">04</span>
                    <p>// &nbsp; Contact</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isBlurred && (
        <div className="blur-overlay" onClick={this.handleHideOffcanvas}></div>
      )}

      </nav>
    );
  }
}

export default Navbar;
