import { is, both } from 'ramda';
import isNotFunction from '../isNotFunction';
import isNotArray from '../isNotArray';

/**
 * Returns true if prop is a plainObject
 * @name isPlainObject
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isPlainObject({}) //=> true
 * isPlainObject(() => {}) //=> false
 * isPlainObject([]) //=> false
 */
const isPlainObject = both(is(Object), both(isNotArray, isNotFunction));

export default isPlainObject;

