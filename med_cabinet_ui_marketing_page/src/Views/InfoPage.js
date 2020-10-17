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
          <img src={this.props.content.img} style={{ width: "50%" }} />
        </div>
        {/* Text */}
        <section>
          <h2>Sub Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            tempora, tempore eligendi eos omnis quisquam maiores! Perferendis,
            deleniti cumque odio illo labore aliquid id amet architecto ad iure
            officiis ab. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt aspernatur similique nemo. Sunt nihil ut unde dolore
            ratione laudantium tempora modi quod, hic magni tempore quidem
            recusandae commodi eaque amet? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum natus, molestias ipsa architecto
            minima, quis exercitationem iusto sequi animi possimus labore
            voluptatum, nostrum ipsum itaque doloribus quia fugiat nihil.
            Ratione.
          </p>
          <h2>Sub Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            tempora, tempore eligendi eos omnis quisquam maiores! Perferendis,
            deleniti cumque odio illo labore aliquid id amet architecto ad iure
            officiis ab. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt aspernatur similique nemo. Sunt nihil ut unde dolore
            ratione laudantium tempora modi quod, hic magni tempore quidem
            recusandae commodi eaque amet? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum natus, molestias ipsa architecto
            minima, quis exercitationem iusto sequi animi possimus labore
            voluptatum, nostrum ipsum itaque doloribus quia fugiat nihil.
            Ratione.
          </p>
          <h2>Sub Section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            tempora, tempore eligendi eos omnis quisquam maiores! Perferendis,
            deleniti cumque odio illo labore aliquid id amet architecto ad iure
            officiis ab. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt aspernatur similique nemo. Sunt nihil ut unde dolore
            ratione laudantium tempora modi quod, hic magni tempore quidem
            recusandae commodi eaque amet? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum natus, molestias ipsa architecto
            minima, quis exercitationem iusto sequi animi possimus labore
            voluptatum, nostrum ipsum itaque doloribus quia fugiat nihil.
            Ratione.
          </p>
        </section>
      </div>
    );
  }
}
