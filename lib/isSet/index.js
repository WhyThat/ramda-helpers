import { complement } from 'ramda';
import isNilOrEmpty from '../isNilOrEmpty';

/**
 * Returns `true` for value that are defined and not empty, `false` otherwise
 * @name isSet
 * @memberof RamdaHelper
 * @see isNilOrEmpty
 * @param {*} value
 * @returns {Boolean}
 * @example
 *
 * isSet([]) //=> false
 * isSet({}) //=> false
 * isSet('') //=> false
 * isSet(null) //=> false
 * isSet(false) //=> true
 * isSet('test') //=> true
 * isSet(['test']) //=> true
 * isSet({ a: 1 }) //=> true
 */
export default complement(isNilOrEmpty);
