import React, { useState } from "react";
import "./InteractiveButton.scss";

type Props = {
  name: {
    active: React.ReactNode | string;
    nonactive: React.ReactNode | string;
  };
};

export const InteractiveButton = ({ name }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const Button = () => {
    if (active) {
      return (
        <button className="interactive-button" onClick={() => setActive(false)}>
          {name.active}
        </button>
      );
    } else {
      return (
        <button className="interactive-button" onClick={() => setActive(true)}>
          {name.nonactive}
        </button>
      );
    }
  };

  return (
    <div className="button-container">
      <Button />
    </div>
  );
};
