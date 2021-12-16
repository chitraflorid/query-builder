import React, { useState } from "react";

const DEFAULT_CONFIG_OPTIONS = {
  multiple: false,
  setValue: () => {},
  size: 0,
  placeHolderText: "Select an option",
  onChange: () => {},
  className: "",
  required: true,
  data: [],
  value: "",
  labelText: "",
  labelPos: "top"
};

const EnterpretDropdown = (props) => {
  const config = Object.assign({}, DEFAULT_CONFIG_OPTIONS, props);
  const selectedVal = config.value ? config.value : config.setValue();
  const [currentValue, setCurrentValue] = useState(selectedVal);

  const renderOptions = () => {
    return config.data.map(({ optgroup = null, options }, indx) => {
      if (optgroup !== null) {
        return (
          <optgroup key={indx} label={optgroup}>
            {createOptions(options)}
          </optgroup>
        );
      } else {
        return createOptions(options);
      }
    });
  };

  const handleValueChange = (e) => {
   // e.stopPropagation();
    setCurrentValue(e.target.value);
    if (typeof config.onChange === "function") {
        config.onChange(currentValue);
    }
  };

  const createOptions = (options) => {
    return options.map((item, indx) => {
      return (
        <option
          disabled={item.disabled ? true : false}
          key={item.id}
          value={item.value}
        >
          {item.text}
        </option>
      );
    });
  };

  return (
      <>
      <div>
    <label className={config.labelPos === "top" ? "block" : ""}>
        {config.labelText}
    </label>
      </div>
    <select
      className={config.className}
      multiple={config.multiple}
      size={config.size}
      value={currentValue}
      onChange={handleValueChange}
      required={config.required}
      id={config.id}
    >
      <option value="">{config.placeHolderText}</option>
      {renderOptions()}
    </select>
</>
  );
};

export default EnterpretDropdown;
