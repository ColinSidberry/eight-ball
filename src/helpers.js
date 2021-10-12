"use strict";

/**Takes in an array of items.
 * Returns a randomly selected item from array of items */

function choice(items) {
    const randIndex = Math.floor(Math.random() * items.length);
    return items[randIndex];
}

export { choice }