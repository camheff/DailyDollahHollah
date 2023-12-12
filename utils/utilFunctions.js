/**
 * Delays the execution of a function for a random amount of time between a minimum and maximum value.
 *  @param {number} [min=500] - The minimum delay time in milliseconds.
 *  @param {number} [max=1500] - The maximum delay time in milliseconds.
 *  @returns {number} - Returns a random delay amount between 50 to 150 unless params are specified.
 */
export function getRandomDelay(min = 50, max = 150) {
    return Math.random() * (max - min) + min;
}

/**
 * Delays the execution of a function for a random amount of time between a minimum and maximum value.
 * @async
 * @param {} params - description of parameters
 * @param {number} [min=500] - The minimum delay time in milliseconds.
 * @param {number} [max=1500] - The maximum delay time in milliseconds.
 * @returns {Promise<void>} - A Promise that resolves after the delay time has passed.
 */
export async function randomDelay(min = 500, max = 1500) {
    const delay = Math.random() * (max - min) + min;
    await new Promise((resolve) => setTimeout(resolve, delay));
}
