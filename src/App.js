import "./App.scss";
import loupe from "./addons/loupe.png";
import masa from "./addons/masa.png";
import turnoff from "./addons/turnoff.png";
import profile from "./addons/profile.png";
import fcb from "./addons/fcb.png";
import drop from "./addons/drop.png";
import rightar from "./addons/rightar.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div className="container">
            <section className="name-surname">
              <div className="search">
                <img src={loupe} alt="loupe" />
                <h1>Velaguez Szpeich</h1>
              </div>
            </section>
            <div className="exp-cont">
              <h1 className="title">Experience</h1>
              <section className="experience">
                <img src={fcb} alt="fcb" />
                <div className="wrapper">
                  <div className="prt">
                    <div className="comp">
                      <h2>Company ∙ Location ∙ </h2>
                      <h3>Job Title ∙ Date</h3>
                    </div>
                    <img src={drop} alt="drop" />
                  </div>
                  <p className="descrpition">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </section>
              <section className="experience">
                <img src={fcb} alt="fcb" />
                <div className="wrapper">
                  <div className="prt">
                    <div className="comp">
                      <h2>Company ∙ Location ∙ </h2>
                      <h3>Job Title ∙ Date</h3>
                    </div>
                    <img src={drop} alt="drop" />
                  </div>
                  <p className="descrpition">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </section>
            </div>
            <section className="edu">
              <div className="left">
                <h1>Education</h1>
                <ul>
                  <li>
                    <img src={masa} alt="masa" />
                    Degree, College Name ∙ Date
                    <img src={rightar} alt="rightar" />
                  </li>
                  <li>
                    <img src={masa} alt="masa" />
                    Degree, College Name ∙ Date
                    <img src={rightar} alt="rightar" />
                  </li>
                </ul>
              </div>
              <div className="right">
                <h1>Certification</h1>
                <ul>
                  <li>
                    <img src={masa} alt="masa" />
                    Degree, College Name ∙ Date
                    <img src={rightar} alt="rightar" />
                  </li>
                  <li>
                    <img src={masa} alt="masa" />
                    Degree, College Name ∙ Date
                    <img src={rightar} alt="rightar" />
                  </li>
                  <li>
                    <img src={masa} alt="masa" />
                    Degree, College Name ∙ Date
                    <img src={rightar} alt="rightar" />
                  </li>
                </ul>
              </div>
            </section>
            <section className="skills">
              <h1 className="title">Skills</h1>
              <div>
                <ul className="pro">
                  <li>Java / C#</li>
                  <li>JavaScript / TypeScript</li>
                  <li>Python</li>
                </ul>
                <ul className="pro">
                  <li>C / C++</li>
                  <li>BaTh / PowerThelQ</li>
                  <li>Azure & AWS</li>
                </ul>
              </div>
            </section>
            <section className="foot">
              <div>
                <h4>
                  {" "}
                  <img src={profile} alt="profile" />
                  Velaguez Szpiech
                </h4>
                <img src={turnoff} alt="turnoff" />
              </div>
            </section>
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
