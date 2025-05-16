export default function Testimonial(){
    return(
        <>
      
  {/* Testimonial Start */}
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="display-5 text-capitalize mb-3">
          Our Clients<span className="text-primary"> Reviews</span>
        </h1>
        <p className="mb-0">
        ⭐⭐⭐⭐⭐
        <br />
        "Cental made renting a car easier than ever. Great service, affordable rates, and super friendly staff!"
— Sanju,delhi
<br />
<br />
⭐⭐⭐⭐⭐
<br />
"Seamless experience from booking to drop-off. Will definitely use Cental again!"
— Jamal R., Pathankot
<br />
<br />
⭐⭐⭐⭐⭐
<br />

"The cars were clean, the process was smooth, and the customer support was amazing."
— Priya K., Mohali
        </p>
      </div>
      <div
        className="owl-carousel testimonial-carousel wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="testimonial-item">
          <div className="testimonial-quote">
            <i className="fa fa-quote-right fa-2x" />
          </div>
          <div className="testimonial-inner p-4">
            <img src="/assets/img/testimonial-1.jpg" className="img-fluid" alt="" />
            <div className="ms-4">
              <h4>Person Name</h4>
              <p>Profession</p>
              <div className="d-flex text-primary">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star text-body" />
              </div>
            </div>
          </div>
          <div className="border-top rounded-bottom p-4">
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
              repellendus impedit.
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-quote">
            <i className="fa fa-quote-right fa-2x" />
          </div>
          <div className="testimonial-inner p-4">
            <img src="/assets/img/testimonial-2.jpg" className="img-fluid" alt="" />
            <div className="ms-4">
              <h4>Person Name</h4>
              <p>Profession</p>
              <div className="d-flex text-primary">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star text-body" />
                <i className="fas fa-star text-body" />
              </div>
            </div>
          </div>
          <div className="border-top rounded-bottom p-4">
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
              repellendus impedit.
            </p>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-quote">
            <i className="fa fa-quote-right fa-2x" />
          </div>
          <div className="testimonial-inner p-4">
            <img src="/assets/img/testimonial-3.jpg" className="img-fluid" alt="" />
            <div className="ms-4">
              <h4>Person Name</h4>
              <p>Profession</p>
              <div className="d-flex text-primary">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star text-body" />
                <i className="fas fa-star text-body" />
                <i className="fas fa-star text-body" />
              </div>
            </div>
          </div>
          <div className="border-top rounded-bottom p-4">
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              soluta neque ab repudiandae reprehenderit ipsum eos cumque esse
              repellendus impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

        
   
    )
}