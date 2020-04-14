import React from "react";

const CheckBox = () => {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
        checked
      />
      <label class="form-check-label" for="exampleRadios1">
        Default radio
      </label>
    </div>
  );
};

export default CheckBox;