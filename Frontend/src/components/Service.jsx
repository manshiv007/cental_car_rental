import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
       
        {/* <!-- Services Start --> */} 
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
                    <h1 className="display-5 text-capitalize mb-3">Cental <span className="text-primary">Services</span></h1>
                    <p className="mb-0">At Cental, we go beyond simple rentals. Our tailored services are designed to make your journey smooth, convenient, and hassle-free—whether you're commuting across town or embarking on a cross-country adventure.
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-phone-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Phone Reservation</h5>
                            <p className="mb-0">Easily reserve your vehicle by calling our 24/7 customer service. Fast, reliable, and personal.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-money-bill-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Special Rates</h5>
                            <p className="mb-0">Enjoy exclusive discounts and promotional deals—perfect for long-term rentals or early bookings.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-road fa-2x"></i>
                            </div>
                            <h5 className="mb-3">One Way Rental</h5>
                            <p className="mb-0">Pick up your car in one city and drop it off in another. Great for road trips or relocation needs.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-umbrella fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Life Insurance</h5>
                            <p className="mb-0">Drive worry-free with our optional insurance coverage—protecting you and your passengers every mile of the way.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-building fa-2x"></i>
                            </div>
                            <h5 className="mb-3">City to City</h5>
                            <p className="mb-0">Whether it's a day trip or a business run, our city-to-city service helps you get there in comfort and style.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-car-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Free Rides</h5>
                            <p className="mb-0">Take advantage of our promotional free ride offers and referral perks. Because who doesn’t love a free trip?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services End --> */}

        {/* <!-- Fact Counter --> */}
        <div className="container-fluid counter py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Happy Clients</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-car-alt fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Number of Cars</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-building fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Car Center</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-clock fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Total kilometers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fact Counter --> */}

        {/* <!-- Testimonial Start --> */}
      <div className="container-fluid testimonial pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Reviews</span></h1>
            
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item">
                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                </div>
                <div className="testimonial-inner p-4">
                    <img src="/assets/img/testimonial-1.jpg" className="img-fluid" alt=""/>
                    <div className="ms-4">
                        <h4>Agatha</h4>
                        <p>Profession</p>
                        <div className="d-flex text-primary">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star text-body"></i>
                        </div>
                    </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                    <p className="mb-0"> "Cental made renting a car easier than ever. Great service, affordable rates, and super friendly staff!"</p>
                </div>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                </div>
                <div className="testimonial-inner p-4">
                    <img src="/assets/img/testimonial-2.jpg" className="img-fluid" alt=""/>
                    <div className="ms-4">
                        <h4>Wanda</h4>
                        <p>Profession</p>
                        <div className="d-flex text-primary">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star text-body"></i>
                        </div>
                    </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                    <p className="mb-0">"The cars were clean, the process was smooth, and the customer support was amazing."</p>
                </div>
            </div>
            <div className="testimonial-item">
                <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
                </div>
                <div className="testimonial-inner p-4">
                    <img src="/assets/img/testimonial-3.jpg" className="img-fluid" alt=""/>
                    <div className="ms-4">
                        <h4>Loki</h4>
                        <p>Profession</p>
                        <div className="d-flex text-primary">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star "></i>
                            <i className="fas fa-star "></i>
                        </div>
                    </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                    <p className="mb-0">"Seamless experience from booking to drop-off. Will definitely use Cental again!"</p>
                </div>
            </div>
        </div>
    </div>
</div>
        {/* <!-- Testimonial End --> */}

        {/* <!-- Banner Start --> */}
        <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
            <div className="container pb-5">
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