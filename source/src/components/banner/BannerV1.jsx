import React from 'react';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area" style={{ backgroundImage: 'url(img/shape/1.png)' }}>
                <div className="shape-left-top">
                    <img src="img/shape/2.png" alt="Shape" />
                </div>
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="information">
                                        <ReactWOW delay="500ms" duration="400ms">
                                            <h3 className="fadeInUp"><strong>Pondok Pesantren Salafiyah Syafi'iyah</strong></h3>
                                        </ReactWOW>
                                        <ReactWOW delay="900ms" duration="400ms">
                                            <p className="fadeInUp">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur placeat quis, vel minima, quaerat repellat saepe voluptatibus dolore, quisquam ullam inventore animi perferendis itaque dignissimos fuga accusamus esse. Similique, laborum!
                                                Ex, illo. Minima explicabo unde ullam doloribus architecto, rem recusandae molestiae ad, quae nihil blanditiis veritatis pariatur illo, atque ipsum quas esse vel. Unde facilis magnam beatae quisquam ad sit?
                                            </p>
                                        </ReactWOW>
                                        <ReactWOW delay="1200ms" duration="400ms">
                                            <div className="button mt-40 fadeInUp">
                                                <Link className="btn btn-md btn-gradient animation" to="/contact-us#">Gabung Bersama Kami</Link>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <ReactWOW>
                                            <img className="fadeInUp" src="img/thumb/3.jpg" alt="Banner Image" />
                                        </ReactWOW>
                                        <ReactWOW delay="500ms">
                                            <img className="fadeInDown" src="img/thumb/1.jpg" alt="Banner Image" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;