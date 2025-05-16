import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [formData, setFormData] = useState({
        carType: "",
        pickUpLocation: "",
        dropOffLocation: "",
        pickUpDate: "",
        pickUpTime: "12:00AM",
        dropOffDate: "",
        dropOffTime: "12:00AM",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (
            !formData.carType ||
            !formData.pickUpLocation ||
            !formData.dropOffLocation ||
            !formData.pickUpDate ||
            !formData.dropOffDate
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form submitted:", formData);
        alert("Reservation submitted!");
    };

    const renderForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="row g-3">
                <div className="col-12">
                    <select
                        className="form-select"
                        name="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Your Car type</option>
                        <option value="VW Golf VII">VW Golf VII</option>
                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                        <option value="Toyota Camry">Toyota Camry</option>
                        <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                    </select>
                </div>

                <div className="col-12">
                    <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-map-marker-alt"></span> <span className="ms-1">Pick Up</span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            name="pickUpLocation"
                            placeholder="Enter a City or Airport"
                            value={formData.pickUpLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="col-12">
                    <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                    <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-map-marker-alt"></span><span className="ms-1">Drop off</span>
                        </div>
                        <input
                            className="form-control"
                            type="text"
                            name="dropOffLocation"
                            placeholder="Enter a City or Airport"
                            value={formData.dropOffLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-calendar-alt"></span><span className="ms-1">Pick Up</span>
                        </div>
                        <input
                            className="form-control"
                            type="date"
                            name="pickUpDate"
                            value={formData.pickUpDate}
                            onChange={handleChange}
                            required
                        />
                        <select
                            className="form-select ms-3"
                            name="pickUpTime"
                            value={formData.pickUpTime}
                            onChange={handleChange}
                        >
                            {generateTimeOptions()}
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-calendar-alt"></span><span className="ms-1">Drop off</span>
                        </div>
                        <input
                            className="form-control"
                            type="date"
                            name="dropOffDate"
                            value={formData.dropOffDate}
                            onChange={handleChange}
                            required
                        />
                        <select
                            className="form-select ms-3"
                            name="dropOffTime"
                            value={formData.dropOffTime}
                            onChange={handleChange}
                        >
                            {generateTimeOptions()}
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-light w-100 py-2">Book Now</button>
                </div>
            </div>
        </form>
    );

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            const suffix = hour >= 12 ? "PM" : "AM";
            const displayHour = hour % 12 === 0 ? 12 : hour % 12;
            const timeLabel = `${displayHour}:00${suffix}`;
            options.push(
                <option key={timeLabel} value={timeLabel}>
                    {timeLabel}
                </option>
            );
        }
        return options;
    };

    return (
        <>
            <div className="header-carousel">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        {[1, 2].map((slide) => (
                            <div key={slide} className={`carousel-item ${slide === 1 ? "active" : ""}`}>
                                <img src={`/assets/img/carousel-${slide}.jpg`} className="img-fluid w-100" alt={`Slide ${slide}`} />
                                <div className="carousel-caption">
                                    <div className="container py-4">
                                        <div className="row g-5">
                                            <div className="col-lg-6 fadeInLeft animated" style={{ animationDelay: "1s" }}>
                                                <div className="bg-secondary rounded p-5">
                                                    <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                                    {renderForm()}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" style={{ animationDelay: "1s" }}>
                                                <div className="text-start">
                                                    <h1 className="display-5 text-white">Get 15% off your rental! Choose Your Model</h1>
                                                    <p>Treat yourself in INDIA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
     


{/* <!-- Carousel End --> */}

{/* <!-- Features Start --> */}
<div className="container-fluid feature py-5">
    <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Cental <span className="text-primary">Features</span></h1>
            <p className="mb-0">At Cental, we prioritize your comfort, convenience, and satisfaction. Discover the core features that set our car rental service apart from the rest.
            </p>
        </div>
        <div className="row g-4 align-items-center">
            <div className="col-xl-4">
                <div className="row gy-4 gx-0">
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <span className="fa fa-trophy fa-2x"></span>
                            </div>
                            <div className="ms-4">
                                <h5 className="mb-3">First className services</h5>
                                <p className="mb-0">Enjoy a luxury experience from start to finish. Our premium vehicles and top-notch service ensure your journey is as smooth as your ride.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <span className="fa fa-road fa-2x"></span>
                            </div>
                            <div className="ms-4">
                                <h5 className="mb-3">24/7 road assistance</h5>
                                <p className="mb-0">Day or night, we're here for you. Our reliable roadside assistance is available 24/7 to keep you safe and stress-free throughout your rental.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                <img src="/assets/img/features-img.png" className="img-fluid w-100" style={{objectFit: "cover"}} alt="Img"/>
            </div>
            <div className="col-xl-4">
                <div className="row gy-4 gx-0">
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item justify-content-end">
                            <div className="text-end me-4">
                                <h5 className="mb-3">Quality at Minimum</h5>
                                <p className="mb-0">Experience top-tier vehicles and service without breaking the bank. We offer unbeatable value without compromising on quality.</p>
                            </div>
                            <div className="feature-icon">
                                <span className="fa fa-tag fa-2x"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item justify-content-end">
                            <div className="text-end me-4">
                                <h5 className="mb-3">Free Pick-Up & Drop-Off</h5>
                                <p className="mb-0">Skip the hassle! We offer complimentary pick-up and drop-off services to make your rental experience even more convenient.</p>
                            </div>
                            <div className="feature-icon">
                                <span className="fa fa-map-pin fa-2x"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Features End --> */}

{/* <!-- About Start --> */}
<div className="container-fluid overflow-hidden about py-5">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-item">
                    <div className="pb-5">
                        <h1 className="display-5 text-capitalize">Cental <span className="text-primary">About</span></h1>
                        <p className="mb-0">At Cental, we’re passionate about making travel easier, more enjoyable, and more accessible. With a deep commitment to quality and customer satisfaction, we’re here to drive your journey forward.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-item-inner border p-4">
                                <div className="about-icon mb-4">
                                    <img src="/assets/img/about-icon-1.png" className="img-fluid w-50 h-50" alt="Icon"/>
                                </div>
                                <h5 className="mb-3">Our Vision</h5>
                                <p className="mb-0">To become the most trusted and preferred car rental company, offering reliable vehicles and exceptional service at every turn.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item-inner border p-4">
                                <div className="about-icon mb-4">
                                    <img src="/assets/img/about-icon-2.png" className="img-fluid h-50 w-50" alt="Icon"/>
                                </div>
                                <h5 className="mb-3">Our Mision</h5>
                                <p className="mb-0">To provide safe, convenient, and affordable transportation solutions that empower people to travel freely and confidently.</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-item my-4">We blend experience with innovation to deliver unmatched service, no matter the distance. Our growing fleet, dedicated team, and streamlined rental process are all designed with your journey in mind.


                    </p>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="text-center rounded bg-secondary p-4">
                                <h1 className="display-6 text-white">10</h1>
                                <h5 className="text-light mb-0">Years Of Experience</h5>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="rounded">
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Trusted by Thousands of Happy Travelers</p>
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i>  Wide Range of Vehicles</p>
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> Transparent Pricing</p>
                                <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i>  Top-Rated Customer Support</p>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <a href="/about" className="btn btn-primary rounded py-3 px-5">More About Us</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center">
                                <img src="/assets/img/mypic.jpg" className="img-fluid rounded-circle border border-4 border-secondary" style={{width: "100px", height: "100px,"}} alt="Image"/>
                                <div className="ms-4">
                                    <h4>Manshiv Saini</h4>
                                    <p className="mb-0">Cental Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="about-img">
                    <div className="img-1">
                        <img src="/assets/img/about-img.jpg" className="img-fluid rounded h-100 w-100" alt=""/>
                    </div>
                    <div className="img-2">
                        <img src="/assets/img/about-img-1.jpg" className="img-fluid rounded w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- About End --> */}

{/* <!-- Fact Counter --> */}
<div className="container-fluid counter bg-secondary py-5">
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

{/* <!-- Car categories Start --> */}
<div className="container-fluid categories pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Vehicle <span className="text-primary">Categories</span></h1>
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
                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
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
                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
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
                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
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
                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
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
            <p className="mb-0 text-white">Renting a car should be simple and stress-free. That’s why our process is designed to be quick, easy, and convenient from the first step to the open road
            </p>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="steps-item p-4 mb-4">
                    <h4>Come In Contact</h4>
                    <p className="mb-0">Reach out to us through our website, phone, or in person. Our friendly team is ready to answer your questions and help you get started.</p>
                    <div className="setps-number">01.</div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="steps-item p-4 mb-4">
                    <h4>Choose A Car</h4>
                    <p className="mb-0">Explore our wide selection of vehicles to find the perfect ride that suits your style, needs, and budget.</p>
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

{/* <!-- Blog Start --> */}
<div className="container-fluid blog py-5">
    <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Cental<span className="text-primary"> Blog & News</span></h1>
            <p className="mb-0">"Stay updated with the latest news and insights from Cental. Discover helpful articles, exciting announcements, and expert tips designed to keep you informed and inspired. Explore our blog to stay ahead in the world of innovation and excellence."
            </p>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="blog-item">
                    <div className="blog-img">
                        <img src="/assets/img/blog-1.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                    </div>
                    <div className="blog-content rounded-bottom p-4">
                        <div className="blog-date">30 Dec 2023</div>
                        <div className="blog-comment my-3">
                            <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                            <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                        </div>
                        <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a>
                        <p className="mb-3">
"Seamless experience!"

“Booking a car through Cental was incredibly simple and fast. The car was clean, and the service was top-notch.”
— Arjun, Mohali</p>
                        <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-item">
                    <div className="blog-img">
                        <img src="/assets/img/blog-2.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                    </div>
                    <div className="blog-content rounded-bottom p-4">
                        <div className="blog-date">25 Dec 2023</div>
                        <div className="blog-comment my-3">
                            <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                            <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                        </div>
                        <a href="#" className="h4 d-block mb-3">Rental cost of sport and other cars</a>
                        <p className="mb-3">
"Excellent customer support"

“Had a small issue with the car, and Cental’s team handled it within minutes. Highly recommended!”
— Ram singh, Chandigarh</p>
                        <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="blog-item">
                    <div className="blog-img">
                        <img src="/assets/img/blog-3.jpg" className="img-fluid rounded-top w-100" alt="Image"/>
                    </div>
                    <div className="blog-content rounded-bottom p-4">
                        <div className="blog-date">27 Dec 2024</div>
                        <div className="blog-comment my-3">
                            <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">Martin.C</span></div>
                            <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">6 Comments</span></div>
                        </div>
                        <a href="#" className="h4 d-block mb-3">Document required for car rental</a>
                        <p className="mb-3">
"Affordable & reliable"

“I needed a rental last-minute and Cental came through. Great rates, and I loved the free ride option!”
— Simran, Pathankot</p>
                        <a href="#" className="">Read More  <i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Blog End --> */}

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

{/* <!-- Team Start --> */}
<div className="container-fluid team pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Customer<span className="text-primary"> Suport</span> Center</h1>
            <p className="mb-0">At Cental, we're committed to making your experience smooth and stress-free. Whether you have a question about your booking, need help with payments, or just want to talk to someone, our support team is here to help—anytime you need us.
            </p>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item p-4 pt-0">
                    <div className="team-img">
                        <img src="/assets/img/team-1.jpg" className="img-fluid rounded w-100" alt="Image"/>
                    </div>
                    <div className="team-content pt-4">
                        <h4>Martin Ford</h4>
                        <p>Accountant</p>
                        <div className="team-icon d-flex justify-content-center">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item p-4 pt-0">
                    <div className="team-img">
                        <img src="/assets/img/team-2.jpg" className="img-fluid rounded w-100" alt="Image"/>
                    </div>
                    <div className="team-content pt-4">
                        <h4>
                Dwane Johnson
                            
                        </h4>
                        <p>Assistant Manager</p>
                        <div className="team-icon d-flex justify-content-center">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item p-4 pt-0">
                    <div className="team-img">
                        <img src="/assets/img/team-3.jpg" className="img-fluid rounded w-100" alt="Image"/>
                    </div>
                    <div className="team-content pt-4">
                        <h4> Jason Sathathm </h4>
                        <p>Supervisor</p>
                        <div className="team-icon d-flex justify-content-center">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item p-4 pt-0">
                    <div className="team-img">
                        <img src="/assets/img/team-4.jpg" className="img-fluid rounded w-100" alt="Image"/>
                    </div>
                    <div className="team-content pt-4">
                        <h4>Martin Doe</h4>
                        <p>Manager</p>
                        <div className="team-icon d-flex justify-content-center">
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square btn-light rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Team End --> */}

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




        </>
    )
}