import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./Selector.scss";

type Props = {
  name: string;
  options: Array<string>;
  onChange: (arg: string) => void;
};

export const Selector = ({ name, options, onChange }: Props) => {
  const [chosen, setChosen] = useState<string>("Any");
  const [showOptionList, setShowOptionList] = useState<boolean>(false);

  const handleOptionClick = (value: string) => () => {
    setChosen(value);
    onChange(value);
    setShowOptionList(false);
  };

  const handleListDisplay = () => {
    setShowOptionList(!showOptionList);
  };

  return (
    <div className="custom-select-container">
      <div className={"selector"} onClick={handleListDisplay}>
        <span>
          {name}: {chosen}
        </span>
        <AiFillCaretDown className="select-icon" />
      </div>
      {showOptionList && (
        <div className="select-options-container">
          <div className="select-header">Select language</div>
          <ul className="select-options">
            {options.map((option, index) => {
              return (
                <li
                  className="custom-select-option"
                  key={"option-" + index}
                  onClick={handleOptionClick(option)}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
