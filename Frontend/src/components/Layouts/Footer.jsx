import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">About Us</h4>
                  <p className="mb-3">
                    Cental is redefining car rentals with a focus on simplicity, flexibility, and customer care. Whether you're planning a weekend getaway or managing a business trip, we provide reliable vehicles and seamless booking experiences tailored to your needs.
                  </p>
                </div>
                {/* Removed input email field */}
                <div className="position-relative">
                  <button
                    type="button"
                    className="btn btn-secondary rounded-pill py-2 mt-2 me-2"
                    style={{ width: "150px" }}
                    onClick={() => window.location.href = "/signup"}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="/About" className="mb-2 text-white d-block">
                  <i className="fas fa-angle-right me-2"></i> About
                </a>
                <a href="/Ourcars" className="mb-2 text-white d-block">
                  <i className="fas fa-angle-right me-2"></i> Cars
                </a>
                <a href="/Ourteam" className="mb-2 text-white d-block">
                  <i className="fas fa-angle-right me-2"></i> Team
                </a>
                <a href="/Contact" className="mb-2 text-white d-block">
                  <i className="fas fa-angle-right me-2"></i> Contact us
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Business Hours</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Mon - Friday:</h6>
                  <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Saturday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Vacation:</h6>
                  <p className="text-white mb-0">All Sunday is our vacation</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a
                  href="https://www.google.co.in/maps/place/Sector+74,+Sahibzada+Ajit+Singh+Nagar,+Punjab+140308/@30.7080351,76.6721226,13.77z/data=!4m10!1m2!2m1!1s74+mohali!3m6!1s0x390feeffdb1fc9f3:0x6f26214a4e09a8a7!8m2!3d30.7115894!4d76.6939939!15sCgk3NCBtb2hhbGmSAQxzdWJsb2NhbGl0eTGqATkQASoGIgI3NCgAMh4QASIaheuzJva8YK_GKiPvgBJflx4Kfbhn5W21MVUyDRACIgk3NCBtb2hhbGngAQA!16s%2Fg%2F11g__1vc5?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoASAFQAw%3D%3D"
                  className="text-white mb-2 d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-map-marker-alt me-2"></i> 74, Mohali, Punjab, India
                </a>
                <a href="mailto:sainimanshiv@gmail.com" className="text-white mb-2 d-block">
                  <i className="fas fa-envelope me-2"></i> sainimanshiv@gmail.com
                </a>
                <a href="tel:+91 7528083204" className="text-white mb-2 d-block">
                  <i className="fas fa-phone me-2"></i> +91 7528083204
                </a>
                <a href="tel:+91 7528083204" className="text-white mb-3 d-block">
                  <i className="fas fa-print me-2"></i> +91 7528083204
                </a>
                <div className="d-flex">
                  <a
                    className="btn btn-secondary btn-md-square rounded-circle me-3"
                    href="https://www.facebook.com/share/1ADVTuxK2a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    className="btn btn-secondary btn-md-square rounded-circle me-3"
                    href="https://x.com/Manshiv_007"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    className="btn btn-secondary btn-md-square rounded-circle me-3"
                    href="https://www.instagram.com/manshivsaini/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    className="btn btn-secondary btn-md-square rounded-circle me-0"
                    href="https://www.linkedin.com/in/manshiv-saini-647a12337/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}
