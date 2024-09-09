let FullPage = () => {
  return (
    <>
      {/* Important for tab focusing
      <div tabIndex={0} scr="" /> */}
      <div className="naye2m-loader" />
      <div id="page">
        <header
          className="naye2m-cover js-fullheight"
          data-stellar-background-ratio="0.5"
          id="naye2m-header"
          role="banner"
          style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              a
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <div
                      className="profile-thumb"
                      style={{ background: "url(images/user-3.jpg)" }}
                    />
                    <div
                      className="profile-thumb"
                      style={{
                        background: "url(images/user-3.jpg.png)",
                        filter: "drop-shadow(3px 8px 1px #0005)",
                        transform: "scale(1.5)",
                      }}
                    ></div>
                    <h1>
                      <span data-value="Muhammad Nayeem" id="Naye2m-nameBlock">
                        MUHAMMAD NAYEEM
                      </span>
                    </h1>
                    <h3>
                      <span>Web Developer / UI/UX Desinger </span>
                    </h3>
                    !!{" "}
                    <h3>
                      <span>C# Developer / 3D Desinger </span>
                    </h3>{" "}
                    !!{" "}
                    <h3>
                      <span>Automation / Many more </span>
                    </h3>
                    <p />
                    <h1 data-value="LOOK, A BLOB">LOOK, A BLOB</h1> <p />
                    <ul className="naye2m-social-icons">
                      <li>
                        <a
                          href=""
                          title="Not available now"
                          target="0_blank"
                          onClick= {()=>NAN('twitter')}
                        >
                          <i className="icon-twitter2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://facebook.com/naye2m"
                          target="_blank"
                          title="My facebook profile"
                        >
                          <i className="icon-facebook2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.gg/user/naye2m#1718"
                          target="_blank"
                          title="My discord profile"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            style={{ width: 40 }}
                            fill="white"
                          >
                            ! Font Awesome Pro 6.3.0 by @fontawesome -
                            https://fontawesome.com License -
                            https://fontawesome.com/license (Commercial License)
                            Copyright 2023 Fonticons, Inc.
                            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          title="Not available now"
                          target="0_blank"
                          onClick={()=>NAN('instagram')}
                        >
                          <i className="icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://wa.me/message/3ONCW2PY7PXIK1"
                          title="Not available now"
                          target="_blank"
                        >
                          <i className="icon-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/+8801880717376"
                          title="Contact me telegram"
                          target="_blank"
                        >
                          <i className="icon-telegram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/naye2m"
                          target="_blank"
                          title="My github profile."
                        >
                          <i className="icon-github2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://m.me/naye2m"
                          target="_blank"
                          title="Text me on massenger!"
                          // onClick={}
                        >
                          <i className="icon-chat2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:naye2m@outlook.com"
                          target="_blank"
                          title="Mail me!"
                          // onClick={}
                        >
                          <i className="icon-"></i>
                        </a>
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="animate-box" id="naye2m-about">
          <div className="container">
            <div className="row animated ">
              <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4" id="naye2m_AM">
                <ul className="info">
                  <li>
                    <span className="first-block">Full Name:</span>
                    <span className="second-block">
                      {" "}
                      <a id="naye2m_AM_n2">MUHAMMAD NAYEEM</a>
                    </span>
                  </li>
                  <li>
                    <span className="first-block">Email:</span>
                    <span className="second-block">
                      <a href="mailto:naye2m@outlook.com">
                        naye2m@outlook.com{" "}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="first-block">Phone:</span>
                    <span className="second-block">
                      <a href="tel:+8801303571531">+880 1303 571 531 &nbsp; </a>
                    </span>
                  </li>
                  <li>
                    <span className="first-block">Website:</span>
                    <span className="second-block">
                      <a href="https://www.naye.xyz">
                        naye.xyz
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a>
                    </span>
                  </li>
                  <li hidden="">
                    <span className="first-block">Address:</span>
                    <span className="second-block">
                      <a href="#">
                        198 West 21th Street, Suite 721 New York NY 10016
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-md-8">
                probem here
                <h2>Hello There!</h2>
                <h1>About Me</h1>
                <p>
                  I'm Muhammad Nayeem, a programmer and web designer with 6
                  years of experience. I'm passionate about creating beautiful
                  and user-friendly products.
                </p>
                <p>
                  I have a strong understanding of both front-end and back-end
                  development, as well as design principles. My repertoire
                  includes a diverse set of programming languages and
                  technologies, notably Python, JavaScript, HTML, CSS, and
                  Figma.
                </p>
                <p>
                  Throughout my career, I've demonstrated adaptability and
                  versatility by successfully undertaking various projects,
                  including website development for small businesses and mobile
                  app development for social media platforms. These experiences
                  have honed my abilities in both web development and design,
                  enabling me to create responsive, user-friendly interfaces
                  that meet the needs of diverse audiences.
                </p>
                <p>
                  <strong>JavaScript Certificates and Experience</strong>
                </p>
                <ul>
                  <li>Animations Certificate in JavaScript - 12-02-21</li>
                  <li>Animations II Certificate in JavaScript - 14-02-21</li>
                  <li>Array Methods Certificate in JavaScript - 12-02-21</li>
                  <li>Automation Certificate in JavaScript - 01-06-22</li>
                  <li>
                    Automation With Google Apps in Google Script - 01-06-22
                  </li>
                  <li>
                    Coding Fundamentals Certificate in JavaScript - 04-02-21
                  </li>
                  <li>
                    Coding Fundamentals II Certificate in JavaScript - 09-12-20
                  </li>
                  <li>Debugging Code Certificate in JavaScript - 15-05-22</li>
                  <li>
                    Intro to Interviewing Certificate in JavaScript - 10-02-21
                  </li>
                  <li>
                    Intro to Webpages Certificate in JavaScript - 01-06-22
                  </li>
                  <li>
                    Using a Code Editor Certificate in JavaScript - 01-06-22
                  </li>
                  <li>Animations II in JavaScript</li>
                  <li>Animations in JavaScript</li>
                  <li>Array Method in JavaScript</li>
                  <li>Coding Fundamentals in JavaScript</li>
                  <li>Coding Fundamentals II in JavaScript</li>
                  <li>Debugging in JavaScript</li>
                  <li>Intro to Interview in JavaScript</li>
                </ul>
                <p>
                  <strong>Programming Languages</strong>
                </p>
                <ul>
                  <li>C - (with Harvard CS course)</li>
                  <li>C intermediate - 02-03-24</li>
                  <li>C# - 16-11-23</li>
                  <li>HTML5 - 15/05/22 (2)</li>
                  <li>CSS3 - 01-06-22</li>
                  <li>PHP - 26-04-22</li>
                  <li>MySQL - 04-10-23</li>
                  <li>SQLite3 - with CS program</li>
                  <li>Python Developer - 06-03-24</li>
                  <li>JavaScript - 15-08-23</li>
                  <li>SCSS</li>
                </ul>
                <p>
                  <strong>Database and Web Development</strong>
                </p>
                <ul>
                  <li>Introduction to SQL - 27-3-23</li>
                  <li>jQuery - 23/01/23</li>
                  <li>Responsive Web Design - 26/04/23</li>
                  <li>SQL - 04-10-23</li>
                  <li>SQL Intermediate - 04-10-23</li>
                </ul>
                <p>
                  <strong>Others</strong>
                </p>
                <ul>
                  <li>
                    Data Structures: B tree, Tree, Linked list, Double linked
                    list
                  </li>
                  <li>
                    Algorithms: Sorting, Merge sort, Bubble sort, Linear search,
                    Hash table searching, Binary search, Bouble search
                  </li>
                  <li>Functional Programming</li>
                  <li>Object-Oriented Programming (OOP)</li>
                  <li>
                    Completed CS course/degree with 100% scores from Harvard
                    University - 2023
                  </li>
                  <li>
                    Completed Python programming course/degree with 100% marks
                    from Harvard University
                  </li>
                  <li>Pandas</li>
                  <li>Flask, Jinja, FlaskAPI, HTTP request</li>
                  <li>Skilled at solving hard problems</li>
                  <li>
                    Strong problem-solving skills related to regular
                    mathematics, including series and conditionals
                  </li>
                  <li>Proficient in Adobe Illustrator and Adobe Photoshop</li>
                  <li>Deep understanding of how Arrays work</li>
                  <li>
                    More comfortable to work with websites for printing
                    documents
                  </li>
                  <li>
                    Basic understanding of file types, photo formats, SVG,
                    animation, 3D design, 3D designing, color palette, color
                    theory, carves
                  </li>
                  <li>Experience with RESTful API</li>
                  <li>Experience with CLI tools making</li>
                </ul>
                <p>
                  I'm also a team player and I'm always willing to help others.
                  I'm always looking for new ways to learn and grow, and I'm
                  excited to see what the future holds for me as a programmer
                  and designer. If you're looking for a programmer and designer
                  who is passionate about creating beautiful and user-friendly
                  products, please don't hesitate to contact me.
                </p>
                <ul className="naye2m-social-icons">
                  <li hidden="">
                    <a href="#">
                      <i className="icon-twitter2" />
                    </a>
                  </li>
                  <li hidden="" />
                  <li>
                    <a href="#">
                      <i className="icon-linkedin2" />
                    </a>
                  </li>
                  <li />
                </ul>
                <p />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="naye2m-bg-color" id="naye2m-resume">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                <h2>My Resume</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-offset-0">
                <ul className="timeline">
                  <li className="timeline-heading text-center animate-box">
                    <div>
                      <h3>Work Experience</h3>
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted">
                    <div className="timeline-badge">
                      <i className="icon-suitcase" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Senior Developer</h3>
                        <span className="company">
                          Company Name - 2016 - Current
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted animate-box">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Junior Developer</h3>
                        <span className="company">
                          Freelancing - 2020 - 2023
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">UI/UX Designer</h3>
                        <span className="company">
                          Freelancing - 2020 - 2023
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </li>
                  <br />
                  <li className="timeline-heading text-center animate-box">
                    <div>
                      <h3>Education</h3>
                    </div>
                  </li>
                  <li className="timeline-inverted animate-box">
                    <div className="timeline-badge">
                      <i className="icon-graduation-cap" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Masters Degree</h3>
                        <span className="company">
                          University Name - 2007 - 2009
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted">
                    <div className="timeline-badge">
                      <i className="icon-graduation-cap" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Bachelors Degree</h3>
                        <span className="company">
                          University Name - 2002 - 2006
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted animate-box">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Course</h3>
                        <span className="company">
                          Basic Computer operation - 2019
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, they live in
                          Bookmarksgrove right at the coast of the Semantics, a
                          large language ocean.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-heading text-center animate-box fadeInUp animated-fast">
                    <div>
                      <h3>JavaScript Certificates and Experience</h3>
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Animations Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 12-02-2021
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Animations II Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 14-02-2021
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Array Methods Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 12-02-2021
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Automation Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 01-06-2022
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Automation With Google Apps in Google Script
                        </h3>
                        <span className="company">Sololearn - 01-06-2022</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Coding Fundamentals Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 04-02-2021
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Coding Fundamentals II Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 09-12-2020
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Debugging Code Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 15-05-2022
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Intro to Interviewing Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 10-02-2021
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Intro to Webpages Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 01-06-2022
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Using a Code Editor Certificate in JavaScript
                        </h3>
                        <span className="company">
                          Grasshopper - Google - 01-06-2022
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="timeline-heading text-center animate-box fadeInUp animated-fast">
                    <div>
                      <h3>Programming Languages</h3>
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          C - (with Hearverd CS course)
                        </h3>
                        <span className="company">Sololearn - </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">C intermediate</h3>
                        <span className="company">Sololearn - 02-03-2024</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">C#</h3>
                        <span className="company">Sololearn - 16-11-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">HTML5</h3>
                        <span className="company">
                          Sololearn - 15-05-2022 (2)
                        </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">CSS3</h3>
                        <span className="company">Sololearn - 01-06-2022</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">PHP</h3>
                        <span className="company">Sololearn - 26-04-2022</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">MySQL</h3>
                        <span className="company">Sololearn - 04-10-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          SQLite3 - with CS programme
                        </h3>
                        <span className="company">Sololearn - </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Python</h3>
                        <span className="company">Sololearn - 01-06-2022</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Python Developer</h3>
                        <span className="company">Sololearn - 06-03-2024</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">JavaScript</h3>
                        <span className="company">Sololearn - 15-08-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">SCSS</h3>
                        <span className="company">Sololearn - </span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="timeline-heading text-center animate-box fadeInUp animated-fast">
                    <div>
                      <h3>Database and Web Development</h3>
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Introduction to SQL</h3>
                        <span className="company">Sololearn - 27-3-23</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">jQuery</h3>
                        <span className="company">Sololearn - 23-01-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">
                          Responsive Web Design
                        </h3>
                        <span className="company">Sololearn - 26-04-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box fadeInUp animated-fast timeline-inverted">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">SQL</h3>
                        <span className="company">Sololearn - 04-10-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted fadeInUp animated-fast">
                    <div className="timeline-badge" />
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">SQL Intermediate</h3>
                        <span className="company">Sololearn - 04-10-2023</span>
                      </div>
                      <div className="timeline-body" />
                    </div>
                  </li>
                  <li className="animate-box timeline-unverted">
                    <div className="timeline-badge">
                      <i className="icon-graduation-cap" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3 className="timeline-title">Graduation</h3>
                        <span className="company">
                          College Name - 1994 - 1998
                        </span>
                      </div>
                      <div className="timeline-body">
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="naye2m-features" className="animate-box">
          <div className="container">
            <div className="services-padding">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                  <h2>My Services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-paintbrush" />
                    </span>
                    <div className="feature-copy">
                      <h3>Developer</h3>
                      <p>
                        {" "}
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Voluptatum aliquid ab veniam autem sed, eveniet
                        perferendis quo hic obcaecati ex voluptates deserunt
                        exercitationem molestias delectus aspernatur architecto
                        repellat, aut aliquam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-briefcase" />
                    </span>
                    <div className="feature-copy">
                      <h3>Branding</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam aliquid perspiciatis ducimus, animi ipsa numquam,
                        eveniet nisi fuga libero rerum recusandae cum rem minima
                        expedita laudantium dolorum dolore facilis temporibus!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-search" />
                    </span>
                    <div className="feature-copy">
                      <h3>Analytics</h3>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis, voluptatum. Odio provident voluptatem
                        aspernatur porro repellat amet ratione unde voluptatibus
                        suscipit sapiente quasi ex, totam fugiat dignissimos
                        alias culpa aut.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-bargraph" />
                    </span>
                    <div className="feature-copy">
                      <h3>Web Developent</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-genius" />
                    </span>
                    <div className="feature-copy">
                      <h3>Web Marketing</h3>
                      <p>
                        Facilis ipsum reprehenderit nemo molestias. Aut cum
                        mollitia reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="feature-left">
                    <span className="icon">
                      <i className="icon-chat" />
                    </span>
                    <div className="feature-copy">
                      <h3>Support</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptas vitae earum aspernatur voluptatum at amet
                        adipisci velit voluptates voluptatem, incidunt ipsam
                        quae illo corporis pariatur a! Enim, cupiditate
                        perferendis. Repellat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div id="naye2m-skills" className="animate-box">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                <h2>Skills</h2>
              </div>
            </div>
            <div className="row row-pb-md">
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={95}>
                  <span>
                    <strong>HTML5</strong>95%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={93}>
                  <span>
                    <strong>CSS3</strong>93%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={90}>
                  <span>
                    <strong>jQuery</strong>90%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={89}>
                  <span>
                    <strong>PHP</strong>89%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={85}>
                  <span>
                    <strong>MySQL</strong>85%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={90}>
                  <span>
                    <strong>AngularJS</strong>90%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={85}>
                  <span>
                    <strong>Ruby</strong>85%
                  </span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent={90}>
                  <span>
                    <strong>Java</strong>90%
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">HTML5/CSS3</span>
                    <span className="value-right">95%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-1 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">WordPress</span>
                    <span className="value-right">90%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-2 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">PHP</span>
                    <span className="value-right">80%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-3 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">Java</span>
                    <span className="value-right">85%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-4 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">Design</span>
                    <span className="value-right">100%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-5 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">Ruby</span>
                    <span className="value-right">70%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">Python</span>
                    <span className="value-right">85%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-1 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <h3>
                    <span className="name-left">jQuery</span>
                    <span className="value-right">75%</span>
                  </h3>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-3 progress-bar-striped active"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="naye2m-work" className="naye2m-bg-dark">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                <h2>Work</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-1.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Illustration</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-2.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Brading</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-3.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Illustration</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-4.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Design</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-5.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Website</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-6.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Illustration</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-7.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Brading</span>
                  </div>
                </a>
              </div>
              <div className="col-md-3 text-center col-padding animate-box">
                <a
                  href="#"
                  className="work"
                  style={{ backgroundImage: "url(images/portfolio-8.jpg)" }}
                >
                  <div className="desc">
                    <h3>Project Name</h3>
                    <span>Illustration</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="naye2m-blog">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
                <h2>Post on Medium</h2>
                <p>
                  Dignissimos asperiores vitae velit veniam totam fuga molestias
                  accusamus alias autem provident. Odit ab aliquam dolor eius.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="naye2m-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/portfolio-1.jpg)" }}
                  />
                  <div className="blog-text">
                    <span className="posted_on">Mar. 15th 2016</span>
                    <h3>
                      <a href="#">Photoshoot On The Street</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2" />
                        249
                      </li>
                      <li>
                        <i className="icon-eye2" />
                        308
                      </li>
                      <li>
                        <a href="#">
                          Read More
                          <i className="icon-arrow-right22" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="naye2m-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/portfolio-2.jpg)" }}
                  />
                  <div className="blog-text">
                    <span className="posted_on">Mar. 15th 2016</span>
                    <h3>
                      <a href="#">Surfing at Philippines</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2" />
                        249
                      </li>
                      <li>
                        <i className="icon-eye2" />
                        308
                      </li>
                      <li>
                        <a href="#">
                          Read More
                          <i className="icon-arrow-right22" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="naye2m-blog animate-box">
                  <a
                    href="#"
                    className="blog-bg"
                    style={{ backgroundImage: "url(images/portfolio-3.jpg)" }}
                  />
                  <div className="blog-text">
                    <span className="posted_on">Mar. 15th 2016</span>
                    <h3>
                      <a href="#">Capture Living On Uderwater</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <ul className="stuff">
                      <li>
                        <i className="icon-heart2" />
                        249
                      </li>
                      <li>
                        <i className="icon-eye2" />
                        308
                      </li>
                      <li>
                        <a href="#">
                          Read More
                          <i className="icon-arrow-right22" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Submit Response</h2>
        <form action="./responds/" method="POST">
          <label htmlFor="name">Name:</label>
          <br />
          <input id="name" name="name" required="" type="text" />
          <br />
          <br />
          <label htmlFor="description">Description:</label>
          <br />
          <input id="description" name="description" required="" type="text" />
          <br />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" required="" defaultValue={""} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <iframe
          width="640px"
          height="480px"
          frameBorder={0}
          marginWidth={0}
          marginHeight={0}
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen=""
          webkitallowfullscreen=""
          mozallowfullscreen=""
          msallowfullscreen=""
        >
          {" "}
        </iframe>{" "}
        <iframe
          title="Contact Form"
          id="ContactForm"
          width="100%"
          height="175vh"
          src="https://forms.office.com/r/8iQ23PXtz2?embed=true"
          frameBorder={0}
          marginWidth={0}
          marginHeight={0}
          style={{ border: "none", maxWidth: "100%", height: "100vh" }}
          allowFullScreen=""
          webkitallowfullscreen=""
          mozallowfullscreen=""
          msallowfullscreen=""
        ></iframe>
        <div id="naye2m-consult">
          <div
            className="video naye2m-video"
            style={{ backgroundImage: "url(images/cover_bg_1.jpg)" }}
          >
            <div className="overlay" />
          </div>
          <div className="choose animate-box">
            <h2>Contact</h2>
            <form action="/responds/" method="POST">
              <div className="row form-group">
                <div className="col-md-6">
                  <input
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your firstname"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    id="email"
                    className="form-control"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    name="description"
                    className="form-control"
                    id="subject"
                    placeholder="Your subject of this message"
                    type="text"
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    cols={30}
                    id="message"
                    name="message"
                    placeholder="Say something about us"
                    rows={10}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  className="btn btn-primary"
                  type="submit"
                  defaultValue="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="naye2m-bg-dark" id="naye2m-started">
        <div className="overlay" />
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center naye2m-heading">
              <h2>Contact Me!</h2>
              <p>
                Need any help or if you wanna ask anything. Feel free to connect
                with me.
              </p>
              <p>
                <a
                  className="btn btn-default btn-lg"
                  href="mailto:naye2m@outlook.com"
                  id="naye2m-box1"
                  target="_blank"
                >
                  <i className="icon-"></i> &nbsp; Contact
                </a>
              </p>
            </div>
          </div>
        </div>
        <div id="map" className="naye2m-map" />
      </div>{" "}
      <FooterOfPage />
      <div className="gototop js-top" id="hi" />
    </>
  );
};
export default FullPage;

function FooterOfPage({}) {
  return (
    <div id="naye2m-footer">
      <div className="container">
        <div className="row" centered="">
          <div className="col-md-12">
            <p>
              © 2017 Free HTML5 Template. All Rights Reserved. <br />
              Designed by{" "}
              <a href="http://freehtml5.co" target="_blank">
                FreeHTML5.co
              </a>{" "}
              Demo Images:{" "}
              <a href="http://unsplash.com" target="_blank">
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
