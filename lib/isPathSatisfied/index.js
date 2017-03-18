import { curry, pathSatisfies } from 'ramda';

import isSet from '../isSet';
import transformer from '../transformDotStringToList';

const isPathDefined = pathSatisfies(isSet);

const isPathSatisfied = curry((predicate, obj) => isPathDefined(transformer(predicate), obj));

/**
 *  Returns `true` if the specified object property at given path isSet @see isSet
 *  returns `false` otherwise
 *  @name isPathSatisfied
 *  @memberof RamdaHelper#
 *  @param {string|string[]} propPath
 *  @param {*} obj
 *  @returns {Boolean}
 *  @example
 *
 *  isPathSatisfied('a.b.c', { a: { b: { c: 'c'} } }) //=> true
 *  isPathSatisfied(['a', 'b', 'c'], { a: { b: { c: 'c'} } }) //=> true
 *  isPathSatisfied('a.c.d', { a: { b: { c: 'c'} } }) //=> false
 *
 */
export default isPathSatisfied;
