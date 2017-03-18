import { is } from 'ramda';

/**
 * Returns true if prop is a function
 * @name isFunction
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isFunction({}) //=> false
 * isFunction(() => {}) //=> true
 */
const isFunction = is(Function);
export default isFunction;
