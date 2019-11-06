import React from "react";
import { tsPropertySignature } from "@babel/types";

export const SpecialButton = (props) => {
  return (
    <>
    <button className={specialButton}>{props.spesh}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
