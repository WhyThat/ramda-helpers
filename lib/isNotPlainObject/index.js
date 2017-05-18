import { complement } from 'ramda';
import isPlainObject from '../isPlainObject';

/**
 * Returns true if prop is not a plainObject
 * @name isNotPlainObject
 * @see isPlainObject
 * @param {*} value
 * @returns {Boolean}
 * @example
 * isNotPlainObject({}) //=> false
 * isNotPlainObject(() => {}) //=> true
 * isNotPlainObject([]) //=> true
 */
const isNotPlainObject = complement(isPlainObject);
export default isNotPlainObject;
