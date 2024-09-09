/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./Consult"
import "./extras"
import "./contract"
import "./header"
import "./resume"


export function FooterOfPage() {
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
export function Page({ NAN }) {
  return (
    <div id="page">
      <LandingComponent NAN={NAN} />
      <About />
      <hr />
      <Resume />
      <hr />
      <Features />
      <Skills />
      <Work />
      <Blog />
      <UnUSED />
      <Consult />
      <Started />
    </div>
  );
}
export function Loader() {
  return <div className="naye2m-loader" />;
}
export function GotoTopBTN() {
  return <div className="gototop js-top" id="hi" />;
}


