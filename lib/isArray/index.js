import { is } from 'ramda';

/**
 * Returns true if prop is a Array
 * @name isArray
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isArray(() => {}) //=> false
 * isArray({}) //=> false
 * isArray([]) //=> true
 */
const isArray = is(Array);
export default isArray;
