import React from 'react';
import './Guides.css';

const Guides = () => {
    return (
        <div className='Guide-section py-5'>
           <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="guides-info text-center">
                        <h3>Read our getting started guides</h3>
                        <p>Get a jump on including Bootstrap's source files in a new project with our official guides.</p>
                        <div className="row text-center">
                            <div className="col-md-4 guides-img">
                                <img src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg" width={80} alt="" />
                                <br />
                                <span className='my-4'> Webpack </span>
                            </div>
                            <div className="col-md-4 guides-img">
                                <img src="https://getbootstrap.com/docs/5.3/assets/img/parcel.png" width={80} alt="" /><br />
                                <span className='my-4'>Parcel</span>
                            </div>
                            <div className="col-md-4 guides-img">
                                <img src="https://getbootstrap.com/docs/5.3/assets/img/vite.svg" width={80} alt="" /><br />
                                <span className='my-4'>Vite</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
           </div>
        </div>
    );
};

export default Guides;