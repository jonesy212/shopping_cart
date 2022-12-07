import React, { useState } from "react";
import "./../";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, ...inputProps } = props;

  const handleFocus = () => {
    //focused
    setFocused(true);
  };

  return (
    <div className="fromContainer">
      <div className="formLabel">
        <label htmlFor={label}></label>
          </div>
          <div className="formInput">
              <input 
                  {...inputProps}
                  onChange={onChange} 
                  onBlue={handleFocus}
                  focused={focused.toString()}
              />
              <span>{errorMessage}</span>
          </div>
    </div>
  );
};

export default FormInput;
