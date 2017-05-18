import { complement } from 'ramda';
import isFunction from '../isFunction';

/**
 * Returns true if prop is not a function
 * @name isNotFunction
 * @see isFunction
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isNotFunction(() => {}) //=> false
 * isNotFunction({}) //=> true
 */
const isNotFunction = complement(isFunction);
export default isNotFunction;
