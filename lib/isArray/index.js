import R from 'ramda';

/**
 * Returns true if prop is a Array
 * @name isArray
 * @memberof RamdaHelper
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isArray(() => {}) //=> false
 * isArray({}) //=> false
 * isArray([]) //=> true
 */
const isArray = R.is(Array);
/**
 * Returns true if prop is not an array
 * @name isNotArray
 * @memberof RamdaHelper
 * @see isArray
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isNotArray(() => {}) //=> true
 * isNotArray({}) //=> true
 * isNotArray([]) //=> false
 */
const isNotArray = R.complement(isArray);

export {
  isArray,
  isNotArray,
};
