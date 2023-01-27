import React from 'react';
import './Build.css';

const Build = () => {
    return (
        <div className='Customize-section padding'>
        <div className="container">
         <div className="row">
             <div className="col-lg-8">
                 <div className="customize-top">
                     <span><i class="fa-solid fa-code"></i></span>
                     <h1>Build and extend in real-time with CSS variables</h1>
                     <h5>Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a :root level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.  </h5>
                     <a href="https://getbootstrap.com/docs/5.3/customize/css-variables/">
                     <button>Learn more about CSS variables <i class="fa-solid fa-arrow-right"></i></button>
                     </a>
                     
                 </div>
             </div>
             <div className="col-lg-4"></div>
         </div>
         <div className="row">
             <div className="col-lg-6">
                 <div className="customize-bottom py-5">
                     <h3>Using CSS variables</h3>
                     <h5>Use any of our <a href="https://getbootstrap.com/docs/5.3/customize/css-variables/#root-variables">global :root variables</a> to write new styles. CSS variables use the <small style={{color:"red" , fontSize:"16px"}}>var(--bs-variableName)</small> syntax and can be inherited by children elements.</h5>
                     <div className="cust-bottom-info py-3">
                     <p>
                       --bs-body-font-family: var(--bs-font-monospace);<br />
                       --bs-body-line-height: 1.4;<br />
                       --bs-body-bg: var(--bs-gray-100);
                       </p>

                       <p>
                       --bs-body-font-family: var(--bs-font-monospace);<br />
                       --bs-body-line-height: 1.4;<br />
                       --bs-body-bg: var(--bs-gray-100);
                       </p>
                        
                        
                     </div>

                    

                 </div>
             </div>
             <div className="col-lg-6">
             <div className="customize-bottom py-5">
                     <h3>Customizing via CSS variables</h3>
                     <h5>Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.</h5>
                     <div className="cust-bottom-info py-3">
                        
                       <p>
                       --bs-body-font-family: var(--bs-font-monospace);<br />
                       --bs-body-line-height: 1.4;<br />
                       --bs-body-bg: var(--bs-gray-100);
                       </p>

                       <p>
                       --bs-body-font-family: var(--bs-font-monospace);<br />
                       --bs-body-line-height: 1.4;<br />
                       --bs-body-bg: var(--bs-gray-100);
                       </p>



                     </div>

                     
                 </div>
             </div>
         </div>
        </div>
     </div>
    );
};

export default Build;