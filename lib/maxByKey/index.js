import { curry, maxBy, prop, reduce } from 'ramda';

const reducer = propStr => maxBy(prop(propStr));

const maxByKey = curry((propStr, defaultObj, list) => reduce(reducer(propStr), defaultObj, list));

/**
 * Returns the object which have the greater value by the key, * otherwise returns default object
 * @name maxByKey
 * @param {*} defaultObject
 * @param {Array}
 * @returns {*}
 * @example
 * maxByKey('a', { a: 0 }, [{ a: 6 }, { a: 5 }]) //=> { a: 6 }
 */
export default maxByKey;
