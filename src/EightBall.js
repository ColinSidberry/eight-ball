
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

function EightBall({ maxNum, text }) {
    //set the state currentColor and message text
    //handleClick function
        // call choice on the eightBallResponses
        // destructe from the choice response message and color
        // reset state for message and color
    // return div that contains an onClick event with the handleClick function. Assign the class of EightBall
    
  const [pushed, setPushed] = useState(false);
  const [num, setNum] = useState(getRandom(maxNum));

  function handleClick() {
    setPushed(true);
    setNum(getRandom(maxNum));
  }

  return (
    <div>

    </div>
  );
}

export default Complex;
