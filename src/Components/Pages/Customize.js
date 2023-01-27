import React from 'react';
import './Customize.css';

const Customize = () => {
    return (
        <div className='Customize-section padding'>
           <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="customize-top">
                        <span><i class="fa-solid fa-clapperboard"></i></span>
                        <h1>Customize everything with Sass</h1>
                        <h5>Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins. </h5>
                        <a href="https://getbootstrap.com/docs/5.3/customize/overview/">
                        <button>Learn more about customizing <i class="fa-solid fa-arrow-right"></i></button>
                        </a>
                        
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="customize-bottom py-5">
                        <h3>Include all of Bootstrap’s Sass</h3>
                        <p>Import one stylesheet and you're off to the races with every feature of our CSS.</p>
                        <div className="cust-bottom-info py-3">
                            <span>// Variable overrides first <i class="fa-regular fa-clipboard"></i></span>
                            <p>$primary: #900; <br />
                               $enable-shadows: true;<br />
                               $prefix: "mo-";
                            </p>
                            <span>// Then import Bootstrap</span>
                            <p>@import "../node_modules/bootstrap/scss/bootstrap";</p>
                        </div>

                        <h6>Learn more about our <a href="https://getbootstrap.com/docs/5.3/customize/options/">global Sass options.</a></h6>

                    </div>
                </div>
                <div className="col-lg-6">
                <div className="customize-bottom py-5">
                        <h3>Include what you need</h3>
                        <p>The easiest way to customize Bootstrap—include only the CSS you need.</p>
                        <div className="cust-bottom-info py-3">
                            <span>// Functions first <i class="fa-regular fa-clipboard"></i></span>
                            <p>@import "../node_modules/bootstrap/scss/functions";
                            </p>
                            <span>// Variable overrides second</span>
                            <p>$primary: #900; <br />
                               $enable-shadows: true;<br />
                               $prefix: "mo-";
                            </p>

                            <span>// Required Bootstrap imports</span>
                            <p>@import "../node_modules/      bootstrap/scss/variables"; <br />
                             @import "../node_modules/bootstrap/scss/maps";<br />
                             @import "../node_modules/bootstrap/scss/mixins";<br />
                             @import "../node_modules/bootstrap/scss/root";
                            </p>

                            <span>// Optional components</span>
                            <p>@import "../node_modules/bootstrap/scss/utilities";<br />
                            @import "../node_modules/bootstrap/scss/reboot";<br />
                            @import "../node_modules/bootstrap/scss/containers";<br />
                            @import "../node_modules/bootstrap/scss/grid";<br />
                            @import "../node_modules/bootstrap/scss/helpers";<br />
                            @import "../node_modules/bootstrap/scss/utilities/api";
                            </p>
                        
                        </div>

                        <h6>Learn more about <a href="https://getbootstrap.com/docs/5.3/customize/sass/">using Bootstrap with Sass.</a></h6>

                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Customize;