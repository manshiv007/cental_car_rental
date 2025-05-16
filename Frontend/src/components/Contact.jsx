export default function Contact(){
    return(
        <>
        
       
  {/* Contact Start */}
  <div className="container-fluid contact py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="display-5 text-capitalize text-primary mb-3">
          Contact Us
        </h1>
        <p className="mb-0">
        Have questions or need assistance with your car rental? Our team is here to help! Whether you're looking for the perfect vehicle, need support with an existing booking, or just want to learn more about our services, we're just a message away.{" "}
          
        
          
        </p>
      </div>
      <div className="row g-5">
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="contact-add-item p-4">
                <div className="contact-icon mb-4">
                  <i className="fas fa-map-marker-alt fa-2x" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">Mohali,punjab,India</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="contact-add-item p-4">
                <div className="contact-icon mb-4">
                  <i className="fas fa-envelope fa-2x" />
                </div>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-0">sainimanshiv@gmail.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="contact-add-item p-4">
                <div className="contact-icon mb-4">
                  <i className="fa fa-phone-alt fa-2x" />
                </div>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-0">(+91) 7528083204</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="contact-add-item p-4">
                <div className="contact-icon mb-4">
                  <i className="fab fa-firefox-browser fa-2x" />
                </div>
                <div>
                  <h4>cental.com</h4>
                  <p className="mb-0">(+91) 7528083204</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-secondary p-5 rounded">
            <h4 className="text-primary mb-4">Send Your Message</h4>
            <form>
              <div className="row g-4">
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="phone">Your Phone</label>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="project"
                      placeholder="Project"
                    />
                    <label htmlFor="project">Your Project</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 160 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-light w-100 py-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-xl-1 wow fadeInUp" data-wow-delay="0.3s">
          <div className="d-flex flex-xl-column align-items-center justify-content-center">
            <a
              className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
              href="https://www.facebook.com/share/1ADVTuxK2a/"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
              href="https://x.com/Manshiv_007"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0"
              href="https://www.instagram.com/manshivsaini/"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-0 me-0 me-xl-0"
              href="https://www.linkedin.com/in/manshiv-saini-647a12337/"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="p-5 bg-light rounded">
            <div className="bg-white rounded p-4 mb-4">
              <h4 className="mb-3">Our Branch 01</h4>
              <div className="d-flex align-items-center flex-shrink-0 mb-3">
                <p className="mb-0 text-dark me-2">Address:</p>
                <i className="fas fa-map-marker-alt text-primary me-2" />
                <p className="mb-0">Mohali,Punjab,INDIA</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 text-dark me-2">Telephone:</p>
                <i className="fa fa-phone-alt text-primary me-2" />
                <p className="mb-0">(+91) 7528083204</p>
              </div>
            </div>
            <div className="bg-white rounded p-4 mb-4">
              <h4 className="mb-3">Our Branch 02</h4>
              <div className="d-flex align-items-center mb-3">
                <p className="mb-0 text-dark me-2">Address:</p>
                <i className="fas fa-map-marker-alt text-primary me-2" />
                <p className="mb-0">new delhi,INDIA</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 text-dark me-2">Telephone:</p>
                <i className="fa fa-phone-alt text-primary me-2" />
                <p className="mb-0">(+91) 7528083204</p>
              </div>
            </div>
            <div className="bg-white rounded p-4 mb-0">
              <h4 className="mb-3">Our Branch 03</h4>
              <div className="d-flex align-items-center mb-3">
                <p className="mb-0 text-dark me-2">Address:</p>
                <i className="fas fa-map-marker-alt text-primary me-2" />
                <p className="mb-0">  Pathankot Punjab,INDIA</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0 text-dark me-2">Telephone:</p>
                <i className="fa fa-phone-alt text-primary me-2" />
                <p className="mb-0">(+91) 7528083204</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="rounded">
            <iframe
              className="rounded w-100"
              style={{ height: 400 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54891.428049699825!2d76.65618076498087!3d30.698314897544364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1745561085827!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

        
        
     
    )
}