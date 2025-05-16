import { Link } from "react-router-dom";
export default function Ourcars(){
    return(
    <>


        {/* <!-- Car categories Start --> */}
       <div className="container-fluid categories pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Choose <span className="text-primary">Car</span></h1>
            <p className="mb-0">Find the perfect ride for every occasion. Whether you're planning a business trip, family vacation, or weekend getaway, we offer a wide range of vehicle categories tailored to your needs.
            </p>
        </div>
        <div className="categories-carousel owl-carousel">
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/png 1.png" className="img-fluid w-50 rounded-top" alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Porsche 911</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4.5 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star text-body"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$399:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">2 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2025</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">380 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
  <img src="/assets/img/png3.png" className="img-fluid w-50 rounded-top" alt="Car image" />
</div>

                    <div className="categories-content rounded-bottom p-4">
                        <h4>Audi R8</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star text-body"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$128:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">400 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/png8.png" className="img-fluid w-50 rounded-top " alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Tesla Model S</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">3.8 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star text-body"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$170:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Electric</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2020</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">670 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/png4.png" className="img-fluid w-50 rounded-top" alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Ford Mustang</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4.8 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$135:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">530 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



  <div className="container-fluid categories pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3"><span className="text-primary"></span></h1>
         
        </div>
        <div className="categories-carousel owl-carousel">
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/png5.png" className="img-fluid w-50 rounded-top" alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Maclern 570s</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">5 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$399:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">2 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2025</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">380 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
  <img src="/assets/img/png6.png" className="img-fluid w-50 rounded-top" alt="Car image" />
</div>

                    <div className="categories-content rounded-bottom p-4">
                        <h4>BMW M4</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star text-body"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$128:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">800 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/pngr.png" className="img-fluid w-50 rounded-top " alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Range Rover Evoque</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star text-body"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$270:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2025</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">870 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                        <img src="/assets/img/png4.png" className="img-fluid w-50 rounded-top" alt=""/>
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                        <h4>Ford Mustang</h4>
                        <div className="categories-review mb-4">
                            <div className="me-3">4.8 Review</div>
                            <div className="d-flex justify-content-center text-secondary">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$135:00/Day</h4>
                        </div>
                        <div className="row gy-2 gx-0 text-center mb-4">
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                            </div>
                            <div className="col-4 border-end border-white">
                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">530 km Range</span>
                            </div>
                        </div>
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        {/* <!-- Car categories End --> */}

        {/* <!-- Car Steps Start --> */}
        <div className="container-fluid steps py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
                    <h1 className="display-5 text-capitalize text-white mb-3">Cental<span className="text-primary"> Process</span></h1>
                    <p className="mb-0 text-white">Renting a car should be simple and stress-free. That’s why our process is designed to be quick, easy, and convenient from the first step to the open road.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Come In Contact</h4>
                            <p className="mb-0">Reach out to us through our website, phone, or in person. Our friendly team is ready to answer your questions and help you get started. </p>
                            <div className="setps-number">01.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Choose A Car</h4>
                            <p className="mb-0">Explore our wide selection of vehicles to find the perfect ride that suits your style, needs, and budget. </p>
                            <div className="setps-number">02.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Enjoy Driving</h4>
                            <p className="mb-0">Hit the road with confidence! Enjoy your journey with a reliable vehicle and round-the-clock support from our team.</p>
                            <div className="setps-number">03.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Car Steps End --> */}

        {/* <!-- Banner Start --> */}
        <div className="container-fluid banner py-5 wow zoomInDown" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="banner-item rounded">
                    <img src="/assets/img/banner-1.jpg" className="img-fluid rounded w-100" alt=""/>
                    <div className="banner-content">
                        <h2 className="text-primary">Rent Your Car</h2>
                        <h1 className="text-white">Interested in Renting?</h1>
                        <p className="text-white">Don't hesitate and send us a message.</p>
                        <div className="banner-btn">
                            <a href="#" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatchApp</a>
                            <a href="#" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner End --> */}

    </>        
    )
    }