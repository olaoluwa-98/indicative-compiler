> **[indicative-compiler](../README.md)**

[Globals](../README.md) / [compiler/sanitizer](../modules/compiler_sanitizer.md) / [SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md) /

# Class: SanitizationsRunner

Runs an array of sanitizations on a given field.

## Hierarchy

* **SanitizationsRunner**

### Index

#### Constructors

* [constructor](compiler_sanitizer.sanitizationsrunner.md#constructor)

#### Methods

* [exec](compiler_sanitizer.sanitizationsrunner.md#exec)

## Constructors

###  constructor

\+ **new SanitizationsRunner**(`_field`: string, `_dotPath`: string[], `rules`: `ParsedRule`[], `sanitizations`: object): *[SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_field` | string |
`_dotPath` | string[] |
`rules` | `ParsedRule`[] |
`sanitizations` | object |

**Returns:** *[SanitizationsRunner](compiler_sanitizer.sanitizationsrunner.md)*

## Methods

###  exec

▸ **exec**(`data`: [SanitizationDataRoot](../modules/compiler_main.md#sanitizationdataroot), `config`: unknown): *undefined | true*

Execute all sanitization in series for a given filed

**Parameters:**

Name | Type |
------ | ------ |
`data` | [SanitizationDataRoot](../modules/compiler_main.md#sanitizationdataroot) |
`config` | unknown |

**Returns:** *undefined | true*