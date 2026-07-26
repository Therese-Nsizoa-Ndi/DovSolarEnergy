import "./Achievements.css";

import hero from "../../assets/achievement.jpg";
import lolabe1 from "../../assets/lolabe1.png"
import lolabe2 from "../../assets/lolabe2.png"
import lolabe3 from "../../assets/lolabe3.png"
import ngovayang1 from "../../assets/ngovayang1.png"
import ngovayang2 from "../../assets/ngovayang2.png"
import bibindi1 from "../../assets/bibindi1.png"
import bibindi2 from "../../assets/bibindi2.png"
import bibindi3 from "../../assets/bibindi3.png"
import bibindi4 from "../../assets/bibindi4.png"
import nuno1 from "../../assets/nuno1.png"
import nuno2 from "../../assets/nuno2.png"

function Achievements(){

return(

<>

<section className="achievement-hero">

    <img
    src={hero}
    alt="Achievements"
    className="achievement-image"
    />

    <div className="achievement-overlay"></div>

    <div className="achievement-content">

        <h3>OUR ACHIEVEMENTS</h3>

        <h1>
        Building
        <br/>

        Africa's Future

    </h1>

    <p>

    Discover how Dov Solar Energy has been
    transforming communities through innovative
    renewable energy solutions since 2020.

    </p>

    </div>

</section>

<section className="intro">

    <h2>Our Journey of Excellence</h2>

    <p>

    Since our foundation in 2020,
    Dov Solar Energy has successfully
    completed projects that improve
    the lives of individuals,
    businesses and communities.

    Each installation reflects our
    commitment to innovation,
    quality and sustainability.

    </p>
</section>   

 {/* ==========================
        2023
========================== */}

{ /*

<section className="year-section">

    <h2 className="year-title">2023</h2>

    <div className="achievement-project">

        <div className="project-gallery">

            <img
                src={lolabe1}
                alt="Lolabe Solar Plant"
            /> 
        </div>
    </div>
    </section>
    </div>
            <p>
                DovSolarEnergy designed and installed a 10 kVA solar
                mini power plant for the Lolabe–Kribi PK3 Highway
                Weigh Station. This renewable energy system provides
                reliable electricity for daily operations while reducing
                dependence on conventional energy sources and supporting
                sustainable public infrastructure.
            </p>

        </div>

    </div>

</section>

*/}

{/* ==========================
        2022
========================== */}
{/*
<section className="year-section">

    <h2 className="year-title">2022</h2>

    <div className="achievement-project">

        <div className="project-images">

            <img
                src={ngovayang1}
                alt="Ngovayang 2 Hospital"
                className="main-image"
            />

            <div className="small-images-1">

                <img
                    src={ngovayang2}
                    alt="Solar Panels on Hospital Roof"
                />

            </div>

        </div>

        <div className="project-details">

            <span className="project-badge">
                HEALTHCARE PROJECT
            </span>

            <div className="project-specs">

                <div className="spec">
                    <h5>Location</h5>
                    <p>Ngovayang 2</p>
                </div>

                <div className="spec">
                    <h5>Year</h5>
                    <p>2022</p>
                </div>

                <div className="spec">
                    <h5>Project Type</h5>
                    <p>Hospital Solar Rehabilitation</p>
                </div>

                <div className="spec">
                    <h5>System</h5>
                    <p>Solar Electrification & Water Pumping</p>
                </div>

            </div>

            <h4>Project Impact</h4>

            <p>
                DovSolarEnergy successfully rehabilitated the solar
                power system of Ngovayang 2 Hospital by restoring
                electricity and implementing a solar-powered water
                pumping system. The project improved access to reliable
                energy and essential healthcare services for the local
                community while promoting sustainable development.
            </p>

        </div>

    </div>

</section>


</section>

*/}

{/* ==========================
        2021
========================== */}

<section className="year-section">

    <h2 className="year-title">2021</h2>

    <div className="achievement-project">

        <div className="project-images">

            <img
                src={bibindi1}
                alt="Bibindi Solar Plant"
                className="main-image"
            />

            <div className="small-images-3">

                <img
                    src={bibindi2}
                    alt="Electrical Control Room"
                />

                <img
                    src={bibindi3}
                    alt="Battery System"
                />

                <img
                    src={bibindi4}
                    alt="Project Information Board"
                />

            </div>

        </div>

        <div className="project-details">

            <span className="project-badge">
                COMMUNITY PROJECT
            </span>

            <div className="project-specs">

                <div className="spec">
                    <h5>Location</h5>
                    <p>Bibindi (AKOM2)</p>
                </div>

                <div className="spec">
                    <h5>Year</h5>
                    <p>2021</p>
                </div>

                <div className="spec">
                    <h5>Capacity</h5>
                    <p>10 kVA Three-Phase</p>
                </div>

                <div className="spec">
                    <h5>Project Type</h5>
                    <p>Community Solar Mini Power Plant</p>
                </div>

            </div>

            <h4>Project Impact</h4>

            <p>
                Installed in Bibindi (AKOM2), this 10 kVA three-phase solar
                mini power plant provides clean and reliable electricity to the
                local community. The project improves access to sustainable
                energy while supporting economic and social development through
                dependable renewable power.
            </p>

        </div>

    </div>

</section>

{/* ==========================
        2020
========================== */}

<section className="year-section">

    <h2 className="year-title">2020</h2>

    {/* Project 1 */}

    <div className="achievement-project">

        <div className="project-images">

            <img
                src={nuno1}
                alt="NKOUAMPBOUER"
                className="main-image"
            />

            <div className="small-images-1">

                <img
                    src={nuno2}
                    alt="Electrical Room"
                />

            </div>

        </div>

        <div className="project-details">

            <span className="project-badge">
                 HEALTH CENTRE
            </span>


            <div className="project-specs">

                <div className="spec">
                    <h5>Location</h5>
                    <p>NKOUAMPBOUER Health Centre</p>
                </div>

                <div className="spec">
                    <h5>Year</h5>
                    <p>2020</p>
                </div>

                <div className="spec">
                    <h5>Capacity</h5>
                    <p>3.5 kVA – 24V</p>
                </div>

                <div className="spec">
                    <h5>Project Type</h5>
                    <p>Health Centre Solar Plant</p>
                </div>

            </div>

            <h4>Project Impact</h4>

            <p>
                This installation provides reliable and sustainable electricity
                to the NKOUAMPBOUER Health Centre, improving access to essential
                healthcare services while reducing dependence on conventional
                energy sources.
            </p>


        </div>

     </div>

        </section>

        </>

    )

}

export default Achievements;