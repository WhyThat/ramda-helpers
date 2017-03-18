import {
  adjust,
  curry,
  fromPairs,
  identity,
  ifElse,
  map,
  pipe,
  toPairs,
  when,
} from 'ramda';
import isArray from '../isArray';
import isPlainObject from '../isPlainObject';

// eslint-disable-next-line no-use-before-define
const transformObject = strFormatter => ifElse(isPlainObject, renameKeysBy(strFormatter), identity);
const transformArray = strFormatter => map(transformObject(strFormatter));

const transformKey = strFormatter => adjust(strFormatter, 0);
const transformValue = strFormatter => adjust(
  pipe(
    when(isArray, transformArray(strFormatter)),
    transformObject(strFormatter)), 1);

const renameKeysBy = curry(
  (strFormatter, obj) => pipe(
    toPairs,
    map(pipe(transformKey(strFormatter), transformValue(strFormatter))),
    fromPairs)(obj));

/**
 * Returns objects with all keys renamed by the predicate (recursivly)
 * @name renameKeysBy
 * @param {function} predicate
 * @param {Object} obj
 * @returns {Object}
 * @example
 * renameByKey(str => `prefix_${str}`, { test: 'test' })
 *    //=> { prefix_test: 'test' }
 */
export default renameKeysBy;
