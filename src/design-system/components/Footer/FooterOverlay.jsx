import React from 'react';

import './FooterOverlay.css';

const FooterOverlay = () => (
  <>
    <footer className="main-footer me6-position-relative me6-z-index-1 me6-padding-top-xl footer">
      <div className="me6-container me6-max-width-lg">
        <div className="me6-grid me6-gap-y-lg me6-gap-lg@lg">
          <div className="me6-col-3@lg me6-order-2@lg me6-text-right@lg">
            <a className="main-footer__logo" href="">
              <svg width="414" height="414" viewBox="0 0 414 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.1563 163.286L276.948 49.8546C311.167 28.3874 355.562 53.0693 355.562 93.5689V320.431C355.562 360.927 311.167 385.613 276.948 364.146L96.1563 250.715C63.972 230.518 63.972 183.482 96.1563 163.286Z" fill="#1EA5FC" />
                <path d="M317.843 163.286L137.052 49.8546C102.833 28.3874 58.4379 53.0693 58.4379 93.5689V320.431C58.4379 360.927 102.833 385.613 137.052 364.146L317.843 250.715C350.028 230.518 350.028 183.482 317.843 163.286Z" fill="#7B6EF6" />
              </svg>
            </a>
          </div>
          <nav className="me6-col-9@lg me6-order-1@lg">
            <ul className="me6-grid me6-gap-y-lg me6-gap-lg@xs">
              <li className="me6-col-6@xs me6-col-3@md">
                <h4 className="me6-margin-bottom-sm me6-text-base@md">Product</h4>
                <ul className="me6-grid me6-gap-xs me6-text-sm@md">
                  <li>
                    <a href="#0" className="main-footer__link">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Teams
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Features
                    </a>
                  </li>

                </ul>
              </li>
              <li className="me6-col-6@xs me6-col-3@md">
                <h4 className="me6-margin-bottom-sm me6-text-base@md">
                  Developers
                </h4>
                <ul className="me6-grid me6-gap-xs me6-text-sm@md">
                  <li>
                    <a href="#0" className="main-footer__link">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      API reference
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      API status
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Open source
                    </a>
                  </li>
                </ul>
              </li>
              <li className="me6-col-6@xs me6-col-3@md">
                <h4 className="me6-margin-bottom-sm me6-text-base@md">Resources</h4>
                <ul className="me6-grid me6-gap-xs me6-text-sm@md">
                  <li>
                    <a href="#0" className="main-footer__link">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Case studies
                    </a>
                  </li>

                </ul>
              </li>
              <li className="me6-col-6@xs me6-col-3@md">
                <h4 className="me6-margin-bottom-sm me6-text-base@md">About</h4>
                <ul className="me6-grid me6-gap-xs me6-text-sm@md">
                  <li>
                    <a href="#0" className="main-footer__link">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Customers
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="main-footer__link">
                      Education
                    </a>
                  </li>

                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="me6-flex me6-flex-column me6-border-top me6-padding-y-xs me6-margin-top-lg me6-flex-row@md me6-justify-between@md me6-items-center@md">
          <div className="me6-margin-bottom-sm me6-margin-bottom-0@md">
            <div className="me6-text-sm me6-text-xs@md me6-color-contrast-medium me6-flex me6-flex-wrap me6-gap-xs">
              <span>© myWebsite</span>
              <a href="#0" className="me6-color-contrast-high">
                Terms
              </a>
              <a href="#0" className="me6-color-contrast-high">
                Privacy
              </a>
            </div>
          </div>
          <div className="me6-flex me6-items-center me6-gap-xs">
            <a href="#0" className="main-footer__social">
              <svg className="me6-icon me6-block" viewBox="0 0 16 16">
                <title>Follow us on Twitter</title>
                <g>
                  <path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z" />
                </g>
              </svg>
            </a>
            <a href="#0" className="main-footer__social">
              <svg className="me6-icon me6-block" viewBox="0 0 16 16">
                <title>Follow us on Youtube</title>
                <g>
                  <path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z" />
                </g>
              </svg>
            </a>
            <a href="#0" className="main-footer__social">
              <svg className="me6-icon me6-block" viewBox="0 0 16 16">
                <title>Follow us on Github</title>
                <g>
                  <path d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6 C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5 c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1 c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8 c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2 c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>

  </>
);

export default FooterOverlay;
