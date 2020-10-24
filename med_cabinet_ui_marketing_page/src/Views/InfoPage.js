import React, { Component } from "react";
import "./InfoPage.css";

export default class InfoPage extends Component {
  render() {
    return (
      <div className="UI_INFO_PAGE">
        {/* Header */}
        <h1>{this.props.content.header}</h1>
        {/* Image */}
        <div>
          <img
            src={this.props.content.img}
            style={{ width: "50%" }}
            alt={this.props.content.header + " img"}
          />
        </div>
        {/* Text */}
        <section>
          {this.props.content.content.map((e) => {
            if (e.type === "h3") {
              return <h3>{e.text}</h3>;
            }
            if (e.type === "p") {
              return <p>{e.text}</p>;
            }
            return null;
          })}
        </section>
      </div>
    );
  }
}
