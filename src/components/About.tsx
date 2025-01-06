/**
 * About page based on the tutorial at https://w3collective.com/html-resume-bootstrap/
 * @returns
 */

import profilepic from "../assets/Profile.png";

export default function About() {
  return (
    <>
      <header className="bg-primary bg-gradient text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-left text-md-center mb3">
              <img
                src={profilepic}
                alt="Profile"
                className="rounded-circle img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h1>Arnar Hafsteinsson</h1>
              <h5>Software Developer</h5>
              <p className="border-top pt-3">
                {/*Arnar Hafsteinsson is a software engineer with a passion for back-end development.}-->*/}
                Software Developer with experience developing payment
                processing, bank and government systems.
              </p>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-dark text-white-50 mb-5">
        <div className="container">
          <div className="row p-3">
            <div className="col-md text-md-center pb-2 pb-md-0">
              <svg
                width="1em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-envelope"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                />
              </svg>
              <span className="text-white ms-2">test@test.com</span>
            </div>
            <div className="col-md text-md-center pb-2 pb-md-0">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-globe"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
                />
              </svg>
              <span className="text-white ms-2">www.test.com</span>
            </div>
            <div className="col-md text-md-center">
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                />
              </svg>
              <span className="text-white ms-2">+354 000-0000</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            {/*Work Experience*/}
            <h2 className="mb-5">Work Experience</h2>
            <ul>
              <li>
                <h6 className="text-primary">
                  Software Developer / Prógramm 2022-2023
                </h6>
                <ul>
                  <li>
                    <span>
                      Development of a system for electronic registration of
                      documents for the District Commissioners office (ASP.NET
                      Core, SQL Server, Informix).
                    </span>
                  </li>
                  <li>
                    <span>
                      Implementing electronic archiving of the HMS housing
                      benifits system for submission to the National Archives of
                      Iceland (Java, DBPTK, WPF, SQL Server).
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="text-primary">
                  Software Developer / Greiðsluveitan 2013-2022
                </h6>
                <ul>
                  <li>
                    <span>
                      Development of the Central Bank of Iceland Data Portal
                      (ASP.NET Core, React, SQL Server). Translate web to
                      English, authentication with 2FA for nonresidents.
                    </span>
                  </li>
                  <li>
                    <span>
                      Development of an administration web and backend for the
                      Ark (formerly Birtingur) electronic document storage
                      system (Java, Vue.js, PostgreSQL, Oracle DBMS).
                    </span>
                  </li>
                  <li>
                    <span>
                      Development of an exchange rate registration system for
                      the Central Bank of Iceland (ASP.NET Core, SQL Server).
                    </span>
                  </li>
                  <li>
                    <span>
                      Development and maintenance of the Rás payment processing
                      system (Java, DB2, PostgreSQL). Moved the system from DB2
                      to PostgreSQL, implemented online pin and miscellaneous
                      other assignments.
                    </span>
                  </li>
                </ul>
              </li>
              <li>
                <h6 className="text-primary">
                  Software Developer / Handpoint (formerly Median hf) 2002-2013
                </h6>
                <ul>
                  <li>
                    <span>
                      Development, maintenance and management of the
                      Greiðsluveitan Rás payment processing system (Java, DB2).
                    </span>
                  </li>
                  <li>
                    <span>
                      Development, maintenance and management of the Handpoint
                      TPOS payment processing system. (Java, DB2).
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md mb-5">
            <section>
              {/*Education*/}
              <h2 className="mb-5">Education</h2>
              <ul>
                <li>
                  <h6 className="text-primary">
                    {" "}
                    University of Iceland 1998-2002
                  </h6>
                  <p>BSc in Computer Science</p>
                </li>
                <li>
                  <h6 className="text-primary">
                    Reykjavik Technical College 1997-1998
                  </h6>
                  <p>Matriculation exam</p>
                </li>
                <li>
                  <h6 className="text-primary">
                    Reykjavik Technical College 1994-1997
                  </h6>
                  <p>Computer studies</p>
                </li>
              </ul>
            </section>
            <section>
              {/*Skills*/}
              <h2 className="mb-5">Skills</h2>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Java
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  SQL
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  C#
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  ASP.NET Core
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Entity Framework
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  React
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Vue.js
                </div>
              </div>
              <div className="progress mb-4" style={{ height: "25px" }}>
                <div
                  className="progress-bar bg-primary text-left bl-2"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  JavaScript
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-md mb-5"></div>
          <div className="col-md">{/*Projects*/}</div>
        </div>
        <footer className="bg-dark text-white-50 text-center mt-5 p-3">
          <a href="https://github.com" className="text-white">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com" className="text-white">
            LinkedIn
          </a>
        </footer>
      </main>
    </>
  );
}
