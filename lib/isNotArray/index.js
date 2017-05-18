import { complement } from 'ramda';
import isArray from '../isArray';

/**
 * Returns true if prop is not an array
 * @name isNotArray
 * @see isArray
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isNotArray(() => {}) //=> true
 * isNotArray({}) //=> true
 * isNotArray([]) //=> false
 */
const isNotArray = complement(isArray);
export default isNotArray;
