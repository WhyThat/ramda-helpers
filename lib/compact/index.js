import { filter } from 'ramda';

/**
 * returns a list without falsy values
 * @name compact
 * @memberof RamdaHelper#
 * @param {Array}
 *
 * @returns {Array}
 * @example
 *
 * compact(['', 'test', 0, undefined, null])  //=> ['test']
 */
export default filter(el => !!el);
