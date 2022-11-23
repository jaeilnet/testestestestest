import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export const SummaryForm = () => {
  const [tsChecked, setTsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No ice cream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{" "}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tsChecked}
          onChange={(e) => setTsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tsChecked}>
        Confirm order
      </Button>
    </Form>
  );
};
