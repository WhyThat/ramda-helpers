import R from 'ramda';

import transformer from '../transformDotStringToList';


const getPath = R.curry((predicate, obj) => R.path(transformer(predicate), obj));
/**
 *  Retrieve the value at the given path
 *
 *  @name getPath
 *  @memberof RamdaHelper#
 *  @param {string|string[]} path
 *  @param {Object} obj
 *  @returns {*} The data at `path`
 *  @example
 *
 *  getPath('a.b.c', { a: { b : { c : 'value' } } })  //=> 'value'
 *  getPath(['a', 'b', 'c'], { a: { b : { c : 'value' } } })  //=> 'value'
 *  getPath(['a', 'c', 'd'], { a: { b : { c : 'value' } } })  //=> undefined
 */
export default getPath;
