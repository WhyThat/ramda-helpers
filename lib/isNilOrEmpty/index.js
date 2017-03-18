import { isNil, isEmpty, anyPass } from 'ramda';

/**
 * Test if value is NilOrEmpty
 * @name isNilOrEmpty
 * @memberof RamdaHelper#
 * @see isPathSatisfied if you want to test nested object
 * @param {*} val
 * @returns {bool}
 * @example
 * isNilOrEmpty([]) //=> true
 * isNilOrEmpty({}) //=> true
 * isNilOrEmpty('') //=> true
 * isNilOrEmpty(null) //=> true
 * isNilOrEmpty(false) //=> false
 * isNilOrEmpty('test') //=> false
 * isNilOrEmpty(['test']) //=> false
 * isNilOrEmpty({ a: 1 }) //=> false
 */
export default anyPass([isEmpty, isNil]);
