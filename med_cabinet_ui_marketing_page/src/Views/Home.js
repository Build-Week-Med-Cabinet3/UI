import React, { Component } from "react";
import UI_DISP_SEARCH from "../Components/UI_DISP_SEARCH";
import UI_HEADER from "../Components/UI_HEADER";
import UI_INFO_ITEM from "../Components/UI_INFO_ITEM";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="UI-CONTAINER">
          {/* Jumbotron - Header */}
          {/* Considered doing an image Carousel */}
          <header className="UI_HEADER">
            <UI_HEADER
              primary={this.props.colorPrimary}
              secondary={this.props.colorSecondary}
            />
          </header>

          {/* Dispensary Search - 2 block */}
          <section className="dispensarySearch">
            <div
              className="dispensarySearch_left"
              style={{ backgroundColor: this.props.colorPrimary }}
            >
              <UI_DISP_SEARCH
                primary={this.props.colorPrimary}
                secondary={this.props.colorSecondary}
              />
            </div>
            <div className="dispensarySearch_right">
              <p>"Finding the right strain has never been easier!"</p>
              <p className="italic">- Everyone</p>
            </div>
          </section>

          {/* 3 Info Points - 1 row for each statement */}
          <section className="info">
            <UI_INFO_ITEM
              link={this.props.content.infoItemOne.link}
              header={this.props.content.infoItemOne.header}
              img={this.props.content.infoItemOne.img}
              content={this.props.content.infoItemOne.content[1].text}
            />
            <UI_INFO_ITEM
              link={this.props.content.infoItemTwo.link}
              header={this.props.content.infoItemTwo.header}
              img={this.props.content.infoItemTwo.img}
              content={this.props.content.infoItemTwo.content[2].text}
            />
            <UI_INFO_ITEM
              link={this.props.content.infoItemThree.link}
              header={this.props.content.infoItemThree.header}
              img={this.props.content.infoItemThree.img}
              content={this.props.content.infoItemThree.content[2].text}
            />
          </section>
        </div>
      </div>
    );
  }
}
