import { filter } from 'ramda';

const compact = filter(el => !!el);
/**
 * returns a list without falsy values
 * @name compact
 * @param {Array}
 * @returns {Array}
 * @example
 * compact(['', 'test', 0, undefined, null])  //=> ['test']
 */
export default compact;
