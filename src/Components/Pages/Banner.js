import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section padding'>
            <p><a href="https://blog.getbootstrap.com/2022/07/19/bootstrap-5-2-0/"><button className='me-2'>New in v 5.2</button></a> <a href="" className='text-decoration-none fw-bold'>Css variables ,<a href=""> responsive offcanvas</a>, new utilities and more ! </a></p>
            <a href=""> <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" alt="" /></a>

            <div className="banner-info">
                <h1 className='banner-heading fw-bold'>Build fast, responsive sites with Bootstrap</h1>
                <h3 className='banner-heading3 mt-5'>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. </h3>
            </div>


            <div className="banner-installation">
                <p>
                    <button className='p-3 bg-light me-3 mt-5'>$ npm i bootstrap@v5.2 <i class="fa-regular fa-copy"></i> </button>     
                    <button className='p-3 me-3 mt-5  banner-ins'><a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" className='text-decoration-none text-light'>Read the docs</a></button>
                </p>
                <p className='mt-4 mb-4'> <span className='me-3 '>Currently : v5.2.3</span> 
                <a href="https://getbootstrap.com/docs/5.2/getting-started/download/" className='me-3'>Download</a>    
                <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/" className='me-3'> v4.6.x docs</a>
                <a href="https://getbootstrap.com/docs/versions/">All releases</a>
                </p>

                <div className="banner-installation-bottom d-flex">
                <img className="me-4" src="https://cdn4.buysellads.net/uu/1/127574/1668535585-SST41.jpg" alt="" />
                <p className='mt-5 text-align-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste reprehenderit obcaecati excepturi laborum, maxime quod at ut laudantium quasi aspernatur.</p>
                </div>
            </div>



        </div>
    );
};

export default Banner;