import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Ourcars(){
    const [cars, setCars] = useState([]);
    const baseUrl="http://localhost:3001/uploads/"
    const fetchCars = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/getcars");
      setCars(res.data.cars);
      console(res.data.cars)
    } catch (err) {
      console.error("Error fetching cars:", err.message);
    }
  };
   useEffect(() => {
      fetchCars();
    }, []);
    return(
    <>


        {/* <!-- Car categories Start --> */}
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
            <h1 className="display-5 text-capitalize mb-3">Choose <span className="text-primary">Car</span></h1>
            <p className="mb-0">Find the perfect ride for every occasion. Whether you're planning a business trip, family vacation, or weekend getaway, we offer a wide range of vehicle categories tailored to your needs.
            </p>
        </div>
        {cars.map((car) => (
       <div className="container-fluid categories pb-5">
    <div className="container pb-5">
        <div className="categories-carousel owl-carousel">
            <div className="categories-item p-4">
                <div className="categories-item-inner">
                    <div className="categories-img rounded-top d-flex justify-content-center align-items-center" style={{ height: 'auto' }}> 
                       <img 
                            src={baseUrl+car?.image} 
                            className="img-fluid w-40 rounded-top" 
                            alt="" 
                            />
                    </div> 
                    <div className="categories-content rounded-bottom p-4">
                        <h4>{car.name}</h4>
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
                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">{car.price}/day</h4>
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
                        <a href="/signup" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Login To Continue</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        ))}



        {/* <!-- Car categories End --> */}

        {/* <!-- Car Steps Start --> */}
       
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