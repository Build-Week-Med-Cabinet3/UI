import React from "react";
import { Button } from "reactstrap";

export default function UI_DISP_JOIN({ colorPrimary, colorSecondary }) {
  return (
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
      <a
        style={{
          backgroundColor: colorSecondary,
          border: "1px solid " + colorSecondary,
          fontSize: "2.5rem",
          boxShadow: "0 1px 8px rgb(25,25,25)",
          padding: ".375rem .75rem",
          color: "white",
        }}
        href="https://med-cabinet-dusky.vercel.app/register"
      >
        Join Today
      </a>
    </section>
  );
}
