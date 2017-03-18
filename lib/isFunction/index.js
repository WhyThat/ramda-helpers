import { is, complement } from 'ramda';

/**
 * Returns true if prop is a function
 * @name isFunction
 * @memberof RamdaHelper
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isFunction({}) //=> false
 * isFunction(() => {}) //=> true
 */
const isFunction = is(Function);
/**
 * Returns true if prop is not a function
 * @name isNotFunction
 * @memberof RamdaHelper
 * @see isFunction
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isNotFunction(() => {}) //=> false
 * isNotFunction({}) //=> true
 */
const isNotFunction = complement(isFunction);

export {
  isFunction,
  isNotFunction,
};
