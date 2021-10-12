import React, { useState } from "react";
import { eightBallResponses } from "./eightBallData";
import { choice } from "./helpers";

/** Order entering system before it ships.
 *
 * Props:
 * - answers => [{msg: message, color: color},...]
 *
 * State:
 * - currentColor
 * - messageText
 *
 * App -> EightBall
 */

function EightBall({ answers}) {
  //Pseudo-code:
  //set the state currentColor and message text
  //handleClick function
    // call choice on the eightBallResponses
    // destructure from the choice response message and color
    // reset state for message and color
  // return div that contains an onClick event with the handleClick function. Assign the class of EightBall

  const [currentColor, setColor] = useState("black");
  const [messageText, setMessageText] = useState("Think of a Question");

  function handleClick() {
    const { color, msg } = choice(eightBallResponses);
    setColor(color);
    setMessageText(msg);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="eight-ball"
        style={{backgroundColor:currentColor}} // alternatively, we could make it a string
      >
        {messageText}
      </button>
    </div>
  );
}

EightBall.defaultProps = eightBallResponses;

export default EightBall;
