import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-background main-padding">
      <div className="container-fluid">
        <a class="i-img-color" href="https://blog.getbootstrap.com/">
          <img src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" alt="Bootstrap" width="30" height="24" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className=" active nav-li-a" aria-current="page" href="https://getbootstrap.com/docs/5.2/getting-started/introduction/">Docs</a>
            </li>

            <li className="nav-item">
              <a className="nav-li-a active " aria-current="page" href="https://getbootstrap.com/docs/5.2/examples/">Examples</a>
            </li>
            <li className="nav-item">
              <a className="nav-li-a active" aria-current="page" href="https://icons.getbootstrap.com/">Icons</a>
            </li>
            <li className="nav-item">
              <a className="nav-li-a active" aria-current="page" href="https://themes.getbootstrap.com/">Themes</a>
            </li>
            <li className="nav-item">
              <a className="nav-li-a active" aria-current="page" href="https://blog.getbootstrap.com/">Blogs</a>
            </li>


          </ul>



          <div className='icons-b d-flex justify-content-center align-items-center'>
            <div className="nav-icons border-end">
              <a class="navbar-brand" href="https://twitter.com/getbootstrap">
                <img src="https://www.freeiconspng.com/thumbs/logo-twitter-png/logo-twitter-icon-symbol-0.png" alt="Bootstrap" width={30} height="24" />
              </a>

              <a class="navbar-brand" href="https://opencollective.com/bootstrap">
                <img src="https://next-images.opencollective.com/_next/image?url=%2Fstatic%2Fimages%2Fopencollective-icon.png&w=48&q=75" alt="Bootstrap" width={30} height="24" />
              </a>
            </div>
            <div className="b-version ms-2">
              <p><span>v</span> 5.2 <i class="fa-solid fa-caret-down"></i></p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;