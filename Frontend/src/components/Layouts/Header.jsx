import {Link} from "react-router-dom"
export default function Header(){
    return(
<>
{/* // <!-- Topbar Start --> */}
<div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
    <div className="container">
        <div className="row gx-0 align-items-center" style={{height: "45px"}}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                <div className="d-flex flex-wrap">
                    <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                    <a href="tel:7528083204" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>7528083204</a>
                    <a href="mailto:sainimanshiv@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>sainimanshiv@gmail.com</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
                <div className="d-flex align-items-center justify-content-end">
                    <a href="https://www.facebook.com/share/1ADVTuxK2a/" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/Manshiv_007" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/manshivsaini/" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/manshiv-saini-647a12337/" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
{/* // <!-- Topbar End --/> */}

{/* // <!-- Navbar & Hero Start --> */}
<div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a href="" className="navbar-brand p-0">
            <h1 className="display-6 text-primary"><i className="fas fa-car-alt me-3"></i>Cental</h1>
                {/* <!-- <img src="/assets/img/logo.png" alt="Logo"/> --> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
            <Link to= {'/'}>       <a href="" className="nav-item nav-link ">Home</a></Link>
                  <Link to={"/About"}><a href="" className="nav-item nav-link ">About</a></Link>  
                  <Link to={"/Service"}>  <a href="" className="nav-item nav-link ">Service</a></Link>
                   <Link to={'/Blog'}> <a href="" className="nav-item nav-link ">Blog</a></Link>
                    
                    <div className="nav-item dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                        <div className="dropdown-menu m-0">
                        <Link to ={'/Features'}>          <a href="" className="dropdown-item">Our Feature</a></Link>
                            <Link to={'/Ourcars'}><a href="" className="dropdown-item">Our Cars</a>  </Link>
                            <Link to ={'Ourteam'}>     <a href="" className="dropdown-item">Our Team</a></Link>
                            <Link to ={'Testimonial'}>  <a href="testimonial.html" className="dropdown-item">Testimonial</a></Link>
                            {/* <a href="404.html" className="dropdown-item">404 Page</a> */}
                        </div>
                    </div>
                    <Link to ={'Contact'}>      <a href="" className="nav-item nav-link">Contact</a></Link>
                </div>
                <Link to ={'Signup'}>
                <a href="" className="btn btn-primary rounded-pill py-2 px-4">Get Started</a>
                </Link>
               
               
                
            </div>
        </nav>
    </div>
</div>
{/* // <!-- Navbar & Hero End --> */}


</>
    )
}