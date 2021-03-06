/**
 * @module compiler/sanitizer
 */

/**
 * indicative-compiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as getValue from 'lodash.get'
import * as isObject from 'isobject'
import { ParsedRule } from 'indicative-parser'
import { SanitizationDefination, SanitizeFunction, SanitizationDataRoot } from '../contracts'

/**
 * Runs an array of sanitizations on a given field.
 */
export class SanitizationsRunner {
  private _sanitizations: { rule: ParsedRule, fn: SanitizeFunction }[] = []

  constructor (
    private _field: string,
    private _dotPath: string[],
    rules: ParsedRule[],
    sanitizations: { [key: string]: SanitizationDefination },
  ) {
    this._computeSanitizations(sanitizations, rules)
  }

  /**
   * Pull sanitizations for the list defined rules.
   */
  private _computeSanitizations (
    sanitizations: { [key: string]: SanitizationDefination },
    rules: ParsedRule[],
  ) {
    this._sanitizations = rules.map((rule) => {
      const sanitization = sanitizations[rule.name]

      /**
       * Raise exception when sanitization implementation for a
       * given rule is missing.
       */
      if (!sanitization) {
        throw new Error(`${rule.name} is not a registered as a sanitization`)
      }

      /**
       * The sanitization node must have a `validate` function.
       */
      if (typeof (sanitization.sanitize) !== 'function') {
        throw new Error(`${rule.name} is missing sanitize function`)
      }

      /**
       * Mutate args when `compile` function is defined. It is a way to
       * normalize arguments before the sanitization process kicks in.
       */
      if (typeof (sanitization.compile) === 'function') {
        rule.args = sanitization.compile(rule.args)
      }

      return { rule: rule, fn: sanitization.sanitize }
    })
  }

  /**
   * Returns a fresh data copy by copying some of the values from the actual
   * data and then mutating the `tip` and `pointer`. The tip and pointer
   * are mutated so that the sanitization function receives the closest
   * object from the pointer, resulting in performant code.
   */
  private _getDataCopy (data: SanitizationDataRoot): SanitizationDataRoot {
    const tip = this._dotPath.length ? getValue(data.tip, this._dotPath) : data.tip

    /**
     * Updating the tip and pointer
     */
    return Object.assign({}, data, {
      tip: this._field === '::tip::' ? { [this._field]: tip } : tip,
    })
  }

  /**
   * Execute all sanitization in series for a given filed
   */
  public exec (data: SanitizationDataRoot, config: unknown) {
    const dataCopy = this._getDataCopy(data)

    /**
     * Skip validations when the parent value of this field is not
     * an object. The user must validate the parent to be object
     * seperately.
     */
    if (!(isObject as any)(dataCopy.tip)) {
      return true
    }

    this._sanitizations.forEach((sanitization) => {
      sanitization.fn(dataCopy, this._field, sanitization.rule.args, config)
    })
  }
}
