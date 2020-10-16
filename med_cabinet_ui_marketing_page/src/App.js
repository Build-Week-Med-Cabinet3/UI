import React from "react";
import UI_DISP_SEARCH from "./Components/UI_DISP_SEARCH";
import UI_HEADER from "./Components/UI_HEADER";
import UI_INFO_ITEM from "./Components/UI_INFO_ITEM";
import UI_NAV from "./Components/UI_NAV";
import { Button } from "reactstrap";
import "./style.css";
import content from "./sourceContent";

function App() {
  // Used to call color changes in other components
  const colorPrimary = "#247ea7";
  const colorSecondary = "#09921d";
  return (
    <div className="App">
      {/* Nav Top Bar */}
      <UI_NAV primary={colorPrimary} />
      <div className="UI-CONTAINER">
        {/* Jumbotron - Header */}
        {/* Considered doing an image Carousel */}
        <header className="UI_HEADER">
          <UI_HEADER primary={colorPrimary} secondary={colorSecondary} />
        </header>

        {/* Dispensary Search - 2 block */}
        <section className="dispensarySearch">
          <div
            className="dispensarySearch_left"
            style={{ backgroundColor: colorPrimary }}
          >
            <UI_DISP_SEARCH primary={colorPrimary} secondary={colorSecondary} />
          </div>
          <div className="dispensarySearch_right">
            <p>"Finding the right strain has never been easier!"</p>
            <p className="italic">- Everyone</p>
          </div>
        </section>

        {/* 3 Info Points - 1 row for each statement */}
        <section className="info">
          <UI_INFO_ITEM
            imgFirst={false}
            header={content.infoItemOne.header}
            img={content.infoItemOne.img}
          />
          <UI_INFO_ITEM
            imgFirst={true}
            header={content.infoItemTwo.header}
            img={content.infoItemTwo.img}
          />
          <UI_INFO_ITEM
            imgFirst={false}
            header={content.infoItemThree.header}
            img={content.infoItemThree.img}
          />
        </section>
      </div>
      {/* Sign up Section */}
      <section
        className="signUp"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, " +
            colorPrimary +
            "ee 0%, " +
            colorSecondary +
            'dd 100%),url("https://assets.newatlas.com/dims4/default/b132701/2147483647/strip/true/crop/1992x1328+4+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F1c%2F0c%2F920c17e34fff91c2c8b0ada1c1bb%2Fdepositphotos-66142845-l-2015.jpg")',
        }}
      >
        <Button
          style={{
            backgroundColor: colorSecondary,
            border: "1px solid " + colorSecondary,
            fontSize: "2.5rem",
            boxShadow: "0 1px 8px rgb(25,25,25)",
          }}
        >
          Join Today
        </Button>
      </section>
    </div>
  );
}

export default App;
