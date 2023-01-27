import React from 'react';
import "./Installation.css"

const Installation = () => {
    return (
        <div className='Installation-section p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="Installation-left">
                            <span><i class="fa-solid fa-copy"></i></span>
                            <h3 className='my-4'>Install via package manager</h3>
                            <p>Install Bootstrap’s source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don’t include documentation or our full build scripts. You can also <a href="https://github.com/twbs/bootstrap-npm-starter"> use our npm template repo</a> to quickly generate a Bootstrap project via npm. </p>

                            <button className='button1-i'>$ npm i bootstrap @v5.2 <i class="fa-solid fa-copy"></i></button><br />
                            <button className='button2-i'> $ gem install bootstrap -v 5.2.3 <i class="fa-solid fa-copy"></i></button>
                            <p><a href="https://getbootstrap.com/docs/5.2/getting-started/download/">Read our installation docs</a>for more info and additional package managers. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Installation-left">
                        <span><i class="fa-solid fa-book-atlas"></i></span>
                        <h3 className='my-4'>Include via CDN</h3>
                            <p>When you only need to include Bootstrap’s compiled CSS or JS, you can use <a href="https://www.jsdelivr.com/package/npm/bootstrap">jsDelivr</a>. See it in action with our simple <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/#quick-start">quick start</a>, or <a href="https://getbootstrap.com/docs/5.2/examples/">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/#separate">separately</a>. </p>

                            <button className='button1-i'>
                            <span>
                            CSS only & Link attribute use this link <br />
                            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap
                            </span>
                            </button><br />
                            <button className='button2-i'>
                            <span>
                            Js only & Script attribute use this link <br />
                             src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap
                            </span>
                             </button>
                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Installation;