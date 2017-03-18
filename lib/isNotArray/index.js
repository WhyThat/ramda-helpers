import { complement } from 'ramda';
import { isArray } from '../';

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
export default complement(isArray);
