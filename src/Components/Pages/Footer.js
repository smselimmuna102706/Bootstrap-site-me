import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer-section padding'>
           <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer1-info">
                        <i class="fa-brands fa-bootstrap"></i><strong>Bootstrap</strong>
                        <p>Designed and built with all the love in the world by the <a href="https://getbootstrap.com/docs/5.3/about/team/">Bootstrap team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>

                        <span>Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE">MIT</a>, docs CC BY 3.0.</span> <br />
                        <span>Currently v5.3.0-alpha1.</span>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="footer2-Link">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Docs</a></li>
                            <li><a href="">Example</a></li>
                            <li><a href="">Icons</a></li>
                            <li><a href="">Themes</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Swag Store</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="footer2-Link">
                        <h3>Guides</h3>
                        <ul>
                            <li><a href="">Getting Started</a></li>
                            <li><a href="">Starter Template</a></li>
                            <li><a href="">Webpack</a></li>
                            <li><a href="">Parcel</a></li>
                            <li><a href="">Vite</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="footer2-Link">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="">Bootstrap 5</a></li>
                            <li><a href="">Bootstrap 4</a></li>
                            <li><a href="">Icons</a></li>
                            <li><a href="">RFS</a></li>
                            <li><a href="">Npm starter</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                <div className="footer2-Link">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="">Issues</a></li>
                            <li><a href="">Discussion </a></li>
                            <li><a href="">Corporate Sponsors</a></li>
                            <li><a href="">Open Collective</a></li>
                            <li><a href="">Stack Overflow</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;