import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "../style.css";

export default function UI_HEADER({ primary, secondary }) {
  return (
    <div>
      <div
        className="UI_JUMBOTRON"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, " +
            primary +
            "ee 0%, " +
            secondary +
            'dd 100%),url("https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Medical-Marijuana-Dispensary.webp")',
        }}
      >
        <h1 className="display-3">Med Cabinet</h1>
        <div>
          <p>"The last medicine cabinet you well ever need to check"</p>
          <div className="JUMBO_SEARCH">
            <InputGroup style={{ boxShadow: "0 0 20px rgba(0,0,0,.3)" }}>
              <Input
                type="text"
                name="strainSearch"
                id="strainSearch"
                placeholder="Search Strain"
              />
              <InputGroupAddon addonType="append">
                <Button
                  style={{
                    backgroundColor: secondary,
                    border: "1px solid " + secondary,
                  }}
                >
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
