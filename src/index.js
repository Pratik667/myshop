import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Category from './data/category';
import Electronics from './data/electronics';
import Jwellery from './data/jwellery';
import HomeBanner from './data/homebanner';
import Support from './main/support';
import Contact from './main/contact';
const Fetch = lazy(() => import('./data/fetchme'));

ReactDOM.render(
  <>
    <Router>

      <div className="overlay"></div>
        <div className="utility-nav d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="small"><i className="bx bx-envelope"></i> logo@example.com | <i className="bx bx-phone"></i> +91-9876543210
                </p>
              </div>

              <div className="col-12 col-md-6 text-right">
                <p className="small">Free shipping on total of $99 of all products</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-md navbar-light bg-light main-menu" >
          <div className="container">
            <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
              <i className="bx bx-menu icon-single"></i>
            </button>
            <a className="navbar-brand" href="#">
              <h4 className="font-weight-bold"><img src="https://raw.githubusercontent.com/Pratik667/myshop/development/src/assets/logo.jpg" height="50px" width="80px" /></h4>
            </a>
            <ul className="navbar-nav ml-auto d-block d-md-none">
              <li className="nav-item">
                <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
              </li>
            </ul>
            <div className="collapse navbar-collapse nav-left">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="btn btn-link" href="#"><i className="bx bxs-cart icon-single"></i> <span className="badge badge-danger">3</span></a>
                </li>
                <li className="nav-item ml-md-3">
                  <a className="btn btn-primary" href="#"><i className="bx bxs-user-circle mr-1"></i> Log In / Register</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-md navbar-light bg-light sub-menu">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/collections" className="nav-link">Collections</Link>
                </li>                
                <li className="nav-item">
                  <Link to="/support" className="nav-link">Support</Link>    
                </li>
                <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav id="sidebar">
          <div className="sidebar-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-10 pl-0">
                  <a className="btn btn-primary" href="#"><i className="bx bxs-user-circle mr-1"></i> Log In</a>
                </div>

                <div className="col-2 text-left">
                  <button type="button" id="sidebarCollapseX" className="btn btn-link">
                    <i className="bx bx-x icon-single"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ul className="list-unstyled components links">
            <li className="active">
              <a href="#"><i className="bx bx-home mr-3"></i> Home</a>
            </li>
            <li>
              <a href="#"><i className="bx bx-carousel mr-3"></i> Products</a>
            </li>
            <li>
              <a href="#"><i className="bx bx-book-open mr-3"></i> Schools</a>
            </li>
            <li>
              <a href="#"><i className="bx bx-crown mr-3"></i> Publishers</a>
            </li>
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="bx bx-help-circle mr-3"></i>
                Support</a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"><i className="bx bx-phone mr-3"></i> Contact</a>
            </li>
          </ul>

          <h6 className="text-uppercase mb-1">Categories</h6>
          <ul className="list-unstyled components mb-3">
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
            <li>
              <a href="#">Category 1</a>
            </li>
          </ul>

          <ul className="social-icons">
            <li><a href="#" target="_blank" title=""><i className="bx bxl-facebook-square"></i></a></li>
            <li><a href="#" target="_blank" title=""><i className="bx bxl-twitter"></i></a></li>
            <li><a href="#" target="_blank" title=""><i className="bx bxl-linkedin"></i></a></li>
            <li><a href="#" target="_blank" title=""><i className="bx bxl-instagram"></i></a></li>
          </ul>

        </nav>
      <Switch>
      
        <Route path="/collections">
          <Suspense fallback={<div className="load">Please wait</div>} >
            <Fetch />
            </Suspense>
        </Route>        
        <Route path="/">
            <Suspense fallback={<div className="load">Please wait</div>} >
            <div class="banner"></div>
            <Category />
            <Electronics />
            <HomeBanner />
            <Jwellery />    
            </Suspense>
        </Route>
        <Route path="/contact">        
            <Contact />
        </Route> 
        <Route path="/support">
          <Support />
        </Route> 
      </Switch>
      <footer>
            <div class="footer">
            <div class="row">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            </div>

            <div class="row">
            <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
            </ul>
            </div>

            <div class="row">
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
            </div>
            </div>
      </footer>

    </Router>

  </>,
  document.getElementById('root')
);