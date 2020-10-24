import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

export default function UI_DISP_SEARCH({ secondary }) {
  return (
    <div>
      <p>Find Dispenseries Near You</p>
      <div className="UI_ZIP_SEARCH">
        <InputGroup>
          <Input
            type="text"
            name="zipSearch"
            id="zipSearch"
            placeholder="Zip Code"
          />
          <InputGroupAddon addonType="append">
            <Button
              disabled
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
  );
}
