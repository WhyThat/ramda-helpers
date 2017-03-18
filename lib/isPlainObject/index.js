import { is, complement, both } from 'ramda';
import { isNotFunction } from '../isFunction';
import { isNotArray } from '../isArray';

/**
 * Returns true if prop is a plainObject
 * @name isPlainObject
 * @memberof RamdaHelper
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isPlainObject({}) //=> true
 * isPlainObject(() => {}) //=> false
 * isPlainObject([]) //=> false
 */
const isPlainObject = both(is(Object), both(isNotArray, isNotFunction));
/**
 * Returns true if prop is not a plainObject
 * @name isNotPlainObject
 * @memberof RamdaHelper
 * @see isPlainObject
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isNotPlainObject({}) //=> false
 * isNotPlainObject(() => {}) //=> true
 * isNotPlainObject([]) //=> true
 */
const isNotPlainObject = complement(isPlainObject);

export {
  isPlainObject,
  isNotPlainObject,
};
