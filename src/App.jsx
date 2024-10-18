function App() {
  return (
    <>
      {/* Back to top button */}
      <div className="btn-back_to_top">
        <span className="ti-arrow-up" />
      </div>
      {/* Setting button */}
      <div className="config">
        <div className="template-config">
          {/* Settings */}
          <div className="d-block">
            <button className="btn btn-fab btn-sm" id="sideel" title="Settings">
              <span className="ti-settings" />
            </button>
          </div>
          {/* Puschase */}
          <div className="d-block">
            <a
              href="https://macodeid.com/projects/virtual-folio/"
              className="btn btn-fab btn-sm"
              title="Get this template"
              data-toggle="tooltip"
              data-placement="left"
            >
              <span className="ti-download" />
            </a>
          </div>
          {/* Help */}
          <div className="d-block">
            <a
              href="#"
              className="btn btn-fab btn-sm"
              title="Help"
              data-toggle="tooltip"
              data-placement="left"
            >
              <span className="ti-help" />
            </a>
          </div>
        </div>
        <div className="set-menu">
          <p>Select Color</p>
          <div className="color-bar" data-toggle="selected">
            <span
              className="color-item bg-theme-red selected"
              data-class="theme-red"
            />
            <span className="color-item bg-theme-blue" data-class="theme-blue" />
            <span className="color-item bg-theme-green" data-class="theme-green" />
            <span
              className="color-item bg-theme-orange"
              data-class="theme-orange"
            />
            <span
              className="color-item bg-theme-purple"
              data-class="theme-purple"
            />
          </div>
          <select className="custom-select d-block my-2" id="change-page">
            <option value="">Choose Page</option>
            <option value="index">Topbar</option>
            <option value="blog-topbar">Blog (Topbar)</option>
            <option value="index-2">Minibar</option>
            <option value="blog-minibar">Blog (Minibar)</option>
          </select>
        </div>
      </div>
      <div
        className="vg-page page-home"
        id="home"
        style={{ backgroundImage: "url(assets/img/bg_image_1.jpg)" }}
      >
        {/* Navbar */}
        <div
          className="navbar navbar-expand-lg navbar-dark sticky"
          data-offset={500}
        >
          <div className="container">
            <a href="" className="navbar-brand">
              V-Folio
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-expanded="true"
            >
              <span className="ti-menu" />
            </button>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="#home" className="nav-link" data-animate="scrolling">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link" data-animate="scrolling">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#portfolio"
                    className="nav-link"
                    data-animate="scrolling"
                  >
                    Projects
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a href="#blog" className="nav-link" data-animate="scrolling">
                    Blog
                  </a>
                </li> */}
                <li className="nav-item">
                  <a href="#contact" className="nav-link" data-animate="scrolling">
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="nav ml-auto">
                <li className="nav-item">
                  <button className="btn btn-fab btn-theme no-shadow">En</button>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* End Navbar */}
        {/* Caption header */}
        <div className="caption-header text-center wow zoomInDown">
          <h5 className="fw-normal">Welcome</h5>
          <h1 className="fw-light mb-4">
            I'm <b className="fg-theme">Rodolfo</b> Ebajan Jr
          </h1>
          <div className="badge">Web Developer</div>
        </div>{" "}
        {/* End Caption header */}
        <div className="floating-button">
          <span className="ti-mouse" />
        </div>
      </div>
      <div className="vg-page page-about" id="about">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/person.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 wow fadeInRight">
              <h1 className="fw-light">Rodolfo Ebajan Jr</h1>
              <h5 className="fg-theme mb-3">Web Developer</h5>
              <p className="text-muted">
                I am currently a Student at LVCC.
                <br/>
                In my free time, I watching anime and sleep, which helps me stay balanced and inspired. I'm excited about exploring new technologies and collaborating with others on innovative projects!
              </p>
              <ul className="theme-list">
                <li>
                  <b>From:</b> Pampanga, PH
                </li>
                <li>
                  <b>Lives In:</b> Apalit, PH
                </li>
                <li>
                  <b>Age:</b> 20
                </li>
                <li>
                  <b>Gender:</b> Male
                </li>
              </ul>
              <a 
                className="btn btn-theme-outline" 
                href={"assets/resume/Resume_Rodolfo.pdf"} 
                download="Resume_Rodolfo.pdf"
              > 
                Download CV 
              </a>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
          <div className="row py-3">
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp">Coding skills</h4>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">JavaScript</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "86%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      86%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">PHP</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">HTML + CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      100%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Python</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-lg-3">
                <h4 className="wow fadeInUp">Design Skills</h4>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">UI / UX Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      92%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Web Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "99%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      99%
                    </div>
                  </div>
                </div>
                <div className="progress-wrapper wow fadeInUp">
                  <span className="caption">Logo Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "79%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      79%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 wow fadeInRight">
              <h2 className="fw-normal">Education</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2024-2025</div>
                  <div className="details">
                    <h5>Bachelor Of Science in Information System</h5>
                    <small className="fg-theme">La Verdad Christian College</small>
                    <p>
                      Currently Studying BSIS 3 at La Verdad Christian College. 

                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2023-2024</div>
                  <div className="details">
                    <h5>Associate in Computer Technology</h5>
                    <small className="fg-theme">La Verdad Christian College</small>
                    <p>
                      Graduated  at La Verdad Christian College with the degree of Associate in Computer Technology. 

                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">2021-2022</div>
                  <div className="details">
                    <h5>Humanities and Social  Sciences</h5>
                    <small className="fg-theme">Tabunan National Highschool</small>
                    <p>
                      Graduated HUMSS  at Tabunan National Highschool. 
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
              <h2 className="fw-normal">Experience</h2>
              <ul className="timeline mt-4 pr-md-5">
                <li>
                  <div className="title">2024 - Current</div>
                  <div className="details">
                    <h5>None</h5>
                    <small className="fg-theme">None</small>
                    <p>
                      None
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">None</div>
                  <div className="details">
                    <h5>None</h5>
                    <small className="fg-theme">None</small>
                    <p>
                    None
                    </p>
                  </div>
                </li>
                <li>
                  <div className="title">None</div>
                  <div className="details">
                    <h5>None</h5>
                    <small className="fg-theme">None</small>
                    <p>
                    None
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="vg-page page-service">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Services</div>
          </div>
          <h1 className="fw-normal text-center wow fadeInUp">What can i do?</h1>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-paint-bucket" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Web Design</h4>
                  <p>
                    Has little to none Web Design Skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-search" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Programming</h4>
                  <p>
                    Has little to none Programming Skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-vector" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">UI/UX Design</h4>
                  <p>
                  Has little to none UI/UX designing Skills
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="card card-service wow fadeInUp">
                <div className="icon">
                  <span className="ti-desktop" />
                </div>
                <div className="caption">
                  <h4 className="fg-theme">Web Development</h4>
                  <p>
                    Has knowlege on Web Development

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="vg-page page-funfact"
        style={{ backgroundImage: "url(assets/img/bg_banner.jpg)" }}
      >
        <div className="container">
          <div className="row section-counter">
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={768}>
               0
              </h1>
              <span>Clients</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={230}>
                2
              </h1>
              <span>Project Complete</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={97}>
                1
              </h1>
              <span>Project Ongoing</span>
            </div>
            <div className="col-md-6 col-lg-3 py-4 wow fadeIn">
              <h1 className="number" data-number={699}>
                0
              </h1>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div> */}
      {/* Portfolio page */}
      <div className="vg-page page-portfolio" id="portfolio">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Portfolio</div>
          </div>
          <h1 className="text-center fw-normal wow fadeInUp">See my work</h1>
          <div
            className="filterable-button py-3 wow fadeInUp"
            data-toggle="selected"
          >
            <button className="btn btn-theme-outline selected" data-filter="*">
              All
            </button>
            <button className="btn btn-theme-outline" data-filter=".apps">
              Apps
            </button>
            <button className="btn btn-theme-outline" data-filter=".template">
              Template
            </button>
            <button className="btn btn-theme-outline" data-filter=".ios">
              IOS
            </button>
            <button className="btn btn-theme-outline" data-filter=".ui-ux">
              UI/UX
            </button>
            <button className="btn btn-theme-outline" data-filter=".graphic">
              Graphic
            </button>
            <button className="btn btn-theme-outline" data-filter=".wireframes">
              Wireframes
            </button>
          </div>
          <div className="gridder my-3">
            <div className="grid-item apps wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-1.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Mobile Travel App</h5> <p>Travel, Discovery</p>"
              >
                <img src="assets/img/work/work-1.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Midterm Project</h5>
                  {/* <a href="https://github.com/rodolf2/webapp2-midterm-project">View Project</a> */}
                  <p>Simple Website</p>
                </div>
              </div>
            </div>
            <div className="grid-item template wireframes wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-2.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Music App</h5> <p>Musics</p>"
              >
                <img src="assets/img/work/work-2.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Finals Project</h5>
                  <p>Website</p>
                </div>
              </div>
            </div>
            <div className="grid-item apps ios wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-3.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Gaming Dashboard</h5> <p>Games, Streaming</p>"
              >
                <img src="assets/img/work/work-3.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Midterm Project</h5>
                  <p>Personal Portfolio</p>
                </div>
              </div>
            </div>
            {/* <div className="grid-item graphic ui-ux wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-4.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Drugs Delivery App</h5> <p>Health, Drugs</p>"
              >
                <img src="assets/img/work/work-4.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Drugs Delivery App</h5>
                  <p>Health, Drugs</p>
                </div>
              </div>
            </div> */}
            {/* <div className="grid-item apps ios wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-5.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Musics Discover</h5> <p>Musics, Dashboard</p>"
              >
                <img src="assets/img/work/work-5.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Musics Discover</h5>
                  <p>Musics, Dashboard</p>
                </div>
              </div>
            </div> */}
            {/* <div className="grid-item graphic ui-ux wireframes wow zoomIn">
              <div
                className="img-place"
                data-src="assets/img/work/work-6.jpg"
                data-fancybox=""
                data-caption="<h5 class='fg-theme'>Game Streaming</h5> <p>Games, Streaming</p>"
              >
                <img src="assets/img/work/work-6.jpg" alt="" />
                <div className="img-caption">
                  <h5 className="fg-theme">Game Streaming</h5>
                  <p>Games, Streaming</p>
                </div>
              </div>
            </div> */}
          </div>{" "}
          {/* End gridder */}
          <div className="text-center wow fadeInUp">
            <a href="javascript:void(0)" className="btn btn-theme">
              Load More
            </a>
          </div>
        </div>
      </div>{" "}
      {/* End Portfolio page */}
      {/* Testimonial */}
      {/* <div className="vg-page page-testimonial">
        <div className="container">
          <h1 className="text-center fw-normal wow fadeInUp">
            What Clients are Saying
          </h1>
          <div className="row justify-content-center mt-5 wow fadeInUp">
            <div className="col-md-9">
              <div className="owl-carousel testi-carousel">
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-place">
                        <img
                          src="assets/img/testimonials/testimonials_1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="caption">
                        <div className="testi-content">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered
                        </div>
                        <div className="testi-info">
                          <div className="thumb-profile">
                            <img
                              src="assets/img/testimonials/testimonials_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tagline">
                            <h5 className="mb-0">Satria Nugraha</h5>
                            <span className="text-muted">CEO Nutshell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-place">
                        <img
                          src="assets/img/testimonials/testimonials_2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="caption">
                        <div className="testi-content">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                          Saepe natus expedita ab facilis ut, animi explicabo amet.
                          Voluptatibus possimus iste enim, doloremque, fugiat
                          accusamus nisi optio fugit ratione expedita harum?
                        </div>
                        <div className="testi-info">
                          <div className="thumb-profile">
                            <img
                              src="assets/img/testimonials/testimonials_2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="tagline">
                            <h5 className="mb-0">Selena Arrini</h5>
                            <span className="text-muted">CEO BigTree</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "} */}
      {/* End testimonial */}
      {/* Client */}
      {/* <div className="vg-page page-client">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_1.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_2.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_3.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_4.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_5.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_6.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_7.svg" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3 item">
              <div className="img-place wow fadeInUp">
                <img src="assets/img/logo/company_8.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "} */}
      {/* End client */}
      {/* Blog */}
      {/* <div className="vg-page page-blog" id="blog">
        <div className="container">
          <div className="text-center">
            <div className="badge badge-subhead wow fadeInUp">Blog</div>
          </div>
          <h1 className="text-center fw-normal wow fadeInUp">Latest Post</h1>
          <div className="row post-grid">
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="card">
                <div className="img-place">
                  <img src="assets/img/work/work-9.jpg" alt="" />
                </div>
                <div className="caption">
                  <a href="javascript:void(0)" className="post-category">
                    Technology
                  </a>
                  <a href="#" className="post-title">
                    Invision design forward fund
                  </a>
                  <span className="post-date">
                    <span className="sr-only">Published on</span> May 22, 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="card">
                <div className="img-place">
                  <img src="assets/img/work/work-6.jpg" alt="" />
                </div>
                <div className="caption">
                  <a href="javascript:void(0)" className="post-category">
                    Business
                  </a>
                  <a href="#" className="post-title">
                    Announcing a plan for small teams
                  </a>
                  <span className="post-date">
                    <span className="sr-only">Published on</span> May 22, 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="card">
                <div className="img-place">
                  <img src="assets/img/work/work-1.jpg" alt="" />
                </div>
                <div className="caption">
                  <a href="javascript:void(0)" className="post-category">
                    Design
                  </a>
                  <a href="#" className="post-title">
                    5 basic tips for illustrating
                  </a>
                  <span className="post-date">
                    <span className="sr-only">Published on</span> May 22, 2018
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center py-3 wow fadeInUp">
              <a href="blog-fullbar.html" className="btn btn-theme">
                See All Post
              </a>
            </div>
          </div>
        </div>
      </div>{" "} */}
      {/* End blog */}
      {/* Contact */}
      <div className="vg-page page-contact" id="contact">
        <div className="container-fluid">
          <div className="text-center wow fadeInUp">
            <div className="badge badge-subhead">Contact</div>
          </div>
          {/* <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
          <div className="row py-5">
            <div className="col-lg-7 px-0 pr-lg-3 wow zoomIn">
              <div className="vg-maps">
                <div id="google-maps" style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
            <div className="col-lg-5">
              <form className="vg-contact-form">
                <div className="form-row">
                  <div className="col-12 mt-3 wow fadeInUp">
                    <input
                      className="form-control"
                      type="text"
                      name="Name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-6 mt-3 wow fadeInUp">
                    <input
                      className="form-control"
                      type="text"
                      name="Email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-6 mt-3 wow fadeInUp">
                    <input
                      className="form-control"
                      type="text"
                      name="Subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12 mt-3 wow fadeInUp">
                    <textarea
                      className="form-control"
                      name="Message"
                      rows={6}
                      placeholder="Enter message here.."
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-theme mt-3 wow fadeInUp ml-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>{" "}
      {/* End Contact */}
      {/* Footer */}
      <div className="vg-footer">
        <h1 className="text-center"></h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 py-3">
              <div className="footer-info">
                <p>Where to find me</p>
                <hr className="divider" />
                <p className="fs-large fg-white">
                  8th Avenue Larlin Village Brgy. Sampaloc, Apalit, Pampanga
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div className="float-lg-right">
                <p>Follow me</p>
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.instagram.com/rodolfoebajanjr/profilecard/?igsh=eWZuZXh6cjJ5aHFk">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100067550344053&mibextid=ZbWKwL">Facebook</a>
                  </li>
                  {/* <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div className="float-lg-right">
                <p>Contact me</p>
                <hr className="divider" />
                <ul className="list-unstyled">
                  <li>rodolfojrxgt@gmail.com</li>
                  <li>+639454332019</li>
                  <li>+639305864920</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-12 mb-3">
              <h3 className="fw-normal text-center">Subscribe</h3>
            </div>
            <div className="col-lg-6">
              <form className="mb-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <input
                    type="submit"
                    className="btn btn-theme no-shadow"
                    defaultValue="Subscribe"
                  />
                </div>
              </form>
            </div>
            <div className="col-12">
              <p className="text-center mb-0 mt-4">
                Copyright ©2020. All right reserved | This template is made with{" "}
                <span className="ti-heart fg-theme-red" /> by{" "}
                <a href="https://www.macodeid.com/">MACode ID</a>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End footer */}
    </>
  )
}

export default App
