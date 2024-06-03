import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import "./moreOfUs.css";

const MoreOfUs = () => {
  return (
    <>
      <div className="aboutImg">
        <div
          style={{
            backgroundImage: `url(${"/assets/about.png"})`,
          }}
        ></div>
      </div>
      <div className="about">
        <div>
          <span className="aboutTag">Who Are We?</span>
          <section id="subTag">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit.
          </section>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Card
              sx={{ width: 275, backgroundColor: "#c6414c", marginTop: "50px" }}
            >
              <CardContent>
                <img
                  className="WAWimg"
                  src={"/assets/mission.png"}
                  alt="mission"
                />
                <h2>MISSION</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </CardContent>
            </Card>
            <Card
              sx={{ width: 275, backgroundColor: "#c6414c", marginTop: "50px" }}
            >
              <CardContent>
                <img
                  className="WAWimg"
                  src={"/assets/vision.png"}
                  alt="mission"
                />
                <h2>VISION</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </div>

        <hr />

        <div>
          <span className="aboutTag">Why We?</span>
          <div className="cardholder">
            <div className="card">
              <img id="search" src={"/assets/WYW4.png"} alt="Geo-Location" />
              <section>
                <h4>Geo-Location Search</h4>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </section>
            </div>

            <div className="card">
              <img id="search" src={"/assets/WYW2.png"} alt="Geo-Location" />
              <section>
                <h4>Real Time Connect</h4>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </section>
            </div>

            <div className="card">
              <img id="search" src={"/assets/WYW1.png"} alt="Geo-Location" />
              <section>
                <h4>Notification</h4>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </section>
            </div>
            <div className="card">
              <img id="search" src={"/assets/WYW3.png"} alt="Geo-Location" />
              <section>
                <h4>User Friendly</h4>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </section>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default MoreOfUs;
