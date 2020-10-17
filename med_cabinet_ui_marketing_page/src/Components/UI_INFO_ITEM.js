import React, { Component } from "react";
import { Link } from "react-router-dom";

class UI_INFO_TEXT extends Component {
  render() {
    console.log(this.props.header);
    return (
      <div className="infoItemText">
        <Link to={"/" + this.props.link}>
          <h2>{this.props.header}</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reprehenderit ut cumque laudantium, totam minima. Dolor, impedit
          ratione dolore ex aperiam, maiores possimus assumenda ab sit deserunt,
          vero quibusdam ipsa.
        </p>
      </div>
    );
  }
}

class UI_INFO_IMG extends Component {
  render() {
    return (
      <div className="infoItemImg">
        <img src={this.props.img} alt="random img" />
      </div>
    );
  }
}

export default class UI_INFO_ITEM extends Component {
  render() {
    return (
      <div>
        <div className="infoItem">
          <UI_INFO_TEXT header={this.props.header} link={this.props.link} />
          <UI_INFO_IMG img={this.props.img} />
        </div>
      </div>
    );
  }
}
