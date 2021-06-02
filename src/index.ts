import {MyFunc} from './types'

/**
 * @description
 * Func description
 *
 * @param {number} firstParam
 * @param {string[]} secondParam
 * @returns {boolean}
 *
 * @example
 * myFunc(1,'example')
 * // => true
 */
const myFunc:MyFunc = (firstParam, secondParam) => {
    return true
}

/**
 * Group methods
 *
 * @example
 * export {myFunc}
 *
 * Single method
 *
 * @example
 * export default myFunc
 *
 */
export default myFunc
