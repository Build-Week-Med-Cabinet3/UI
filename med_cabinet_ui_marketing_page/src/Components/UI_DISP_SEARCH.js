import React from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

export default function UI_DISP_SEARCH({ primary, secondary }) {
  return (
    <div>
      <p>Find dispenseries near you:</p>
      <div className="UI_ZIP_SEARCH">
        <InputGroup>
          <Input
            type="text"
            name="zipSearch"
            id="zipSearch"
            placeholder="zip"
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
  );
}
