import React from 'react';
import './Get.css';

const Get = () => {
    return (
        <div className='get-section padding'>
            <button className='get-f-Btn mb-4'><i class="fa-solid fa-arrows-rotate"></i></button>
            <h1>Get started any way you want</h1>
            <p>Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code. </p>

            <a href="https://getbootstrap.com/docs/5.2/getting-started/download/">
            <button className='p-3 me-3 mt-5  banner-ins get-Btn'>Read Installation Docs <i class="fa-solid fa-arrow-right"></i></button>
            </a>
        </div>
    );
};

export default Get;