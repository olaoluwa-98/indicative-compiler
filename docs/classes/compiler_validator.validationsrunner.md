> **[indicative-compiler](../README.md)**

[Globals](../README.md) / [compiler/validator](../modules/compiler_validator.md) / [ValidationsRunner](compiler_validator.validationsrunner.md) /

# Class: ValidationsRunner

Runs a series of validations on a given field. This class is feeded with the
computed nodes generated via [TreeWalker](compiler_main.treewalker.md).

## Hierarchy

* **ValidationsRunner**

### Index

#### Constructors

* [constructor](compiler_validator.validationsrunner.md#constructor)

#### Properties

* [async](compiler_validator.validationsrunner.md#async)

#### Methods

* [exec](compiler_validator.validationsrunner.md#exec)
* [execAsync](compiler_validator.validationsrunner.md#execasync)

## Constructors

###  constructor

\+ **new ValidationsRunner**(`_field`: string, `_type`: "literal" | "object" | "array", `_dotPath`: string[], `rules`: `ParsedRule`[], `validations`: object, `_fieldMessages`: `ParsedRulesMessages`, `_genericMessages`: `ParsedRulesMessages`): *[ValidationsRunner](compiler_validator.validationsrunner.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_field` | string |
`_type` | "literal" \| "object" \| "array" |
`_dotPath` | string[] |
`rules` | `ParsedRule`[] |
`validations` | object |
`_fieldMessages` | `ParsedRulesMessages` |
`_genericMessages` | `ParsedRulesMessages` |

**Returns:** *[ValidationsRunner](compiler_validator.validationsrunner.md)*

## Properties

###  async

• **async**: *boolean* = false

We toggle this flag then creating the `_validations` object

## Methods

###  exec

▸ **exec**(`data`: [ValidationDataRoot](../modules/compiler_main.md#validationdataroot), `collector`: [CollectorContract](../interfaces/compiler_main.collectorcontract.md), `config`: unknown, `bail`: boolean): *boolean*

Executes all the validations on a given field synchronously. Run
[ValidationsRunner.execAsync](compiler_validator.validationsrunner.md#execasync) if want to execute asynchronously.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [ValidationDataRoot](../modules/compiler_main.md#validationdataroot) | - |
`collector` | [CollectorContract](../interfaces/compiler_main.collectorcontract.md) | - |
`config` | unknown | - |
`bail` | boolean | false |

**Returns:** *boolean*

___

###  execAsync

▸ **execAsync**(`data`: [ValidationDataRoot](../modules/compiler_main.md#validationdataroot), `collector`: [CollectorContract](../interfaces/compiler_main.collectorcontract.md), `config`: unknown, `bail`: boolean): *`Promise<boolean>`*

Executes all the validations on a given field asynchronously. Run
[ValidationsRunner.exec](compiler_validator.validationsrunner.md#exec) if want to execute synchronously.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | [ValidationDataRoot](../modules/compiler_main.md#validationdataroot) | - |
`collector` | [CollectorContract](../interfaces/compiler_main.collectorcontract.md) | - |
`config` | unknown | - |
`bail` | boolean | false |

**Returns:** *`Promise<boolean>`*