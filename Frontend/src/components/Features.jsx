import {Link} from "react-router-dom" ;
export default function Features(){
    return(
<>

  
  {/* Features Start */}
  <div className="container-fluid feature py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="display-5 text-capitalize mb-3">
          Cental <span className="text-primary">Features</span>
        </h1>
        <p className="mb-0">
        Cental, we prioritize your comfort, convenience, and satisfaction. Discover the core features that set our car rental service apart from the rest.
        </p>
      </div>
      <div className="row g-4 align-items-center">
        <div className="col-xl-4">
          <div className="row gy-4 gx-0">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="fa fa-trophy fa-2x" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">First Class services</h5>
                  <p className="mb-0">
                  Enjoy a luxury experience from start to finish. Our premium vehicles and top-notch service ensure your journey is as smooth as your ride.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="fa fa-road fa-2x" />
                </div>
                <div className="ms-4">
                  <h5 className="mb-3">24/7 road assistance</h5>
                  <p className="mb-0">
                  Day or night, we're here for you. Our reliable roadside assistance is available 24/7 to keep you safe and stress-free throughout your rental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
          <img
            src="/assets/img/features-img.png"
            className="img-fluid w-100"
            style={{ objectFit: "cover" }}
            alt="Img"
          />
        </div>
        <div className="col-xl-4">
          <div className="row gy-4 gx-0">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="feature-item justify-content-end">
                <div className="text-end me-4">
                  <h5 className="mb-3">Quality at Minimum</h5>
                  <p className="mb-0">
                  Experience top-tier vehicles and service without breaking the bank. We offer unbeatable value without compromising on quality.
                  </p>
                </div>
                <div className="feature-icon">
                  <span className="fa fa-tag fa-2x" />
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
              <div className="feature-item justify-content-end">
                <div className="text-end me-4">
                  <h5 className="mb-3">Free Pick-Up &amp; Drop-Off</h5>
                  <p className="mb-0">
                  Skip the hassle! We offer complimentary pick-up and drop-off services to make your rental experience even more convenient.
                  </p>
                </div>
                <div className="feature-icon">
                  <span className="fa fa-map-pin fa-2x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
  {/* Fact Counter */}
  <div className="container-fluid counter py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="counter-item text-center">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-thumbs-up fa-2x" />
            </div>
            <div className="counter-counting my-3">
              <span
                className="text-white fs-2 fw-bold"
                data-toggle="counter-up"
              >
                829
              </span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
            <h4 className="text-white mb-0">Happy Clients</h4>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="counter-item text-center">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-car-alt fa-2x" />
            </div>
            <div className="counter-counting my-3">
              <span
                className="text-white fs-2 fw-bold"
                data-toggle="counter-up"
              >
                56
              </span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
            <h4 className="text-white mb-0">Number of Cars</h4>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="counter-item text-center">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-building fa-2x" />
            </div>
            <div className="counter-counting my-3">
              <span
                className="text-white fs-2 fw-bold"
                data-toggle="counter-up"
              >
                127
              </span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
            <h4 className="text-white mb-0">Car Center</h4>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="counter-item text-center">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-clock fa-2x" />
            </div>
            <div className="counter-counting my-3">
              <span
                className="text-white fs-2 fw-bold"
                data-toggle="counter-up"
              >
                589
              </span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
            <h4 className="text-white mb-0">Total kilometers</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact Counter */}
  {/* Banner Start */}
  <div
    className="container-fluid banner py-5 wow zoomInDown"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="banner-item rounded">
        <img
          src="/assets/img/banner-1.jpg"
          className="img-fluid rounded w-100"
          alt=""
        />
        <div className="banner-content">
          <h2 className="text-primary">Rent Your Car</h2>
          <h1 className="text-white">Interested in Renting?</h1>
          <p className="text-white">Don't hesitate and send us a message.</p>
          <div className="banner-btn">
            <a
              href="#"
              className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2"
            >
              WhatchApp
            </a>
            <a
              href="#"
              className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner End */}
</>



    )
}