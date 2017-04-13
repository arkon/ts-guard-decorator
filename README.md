# ts-guard-decorator 🛡

> Decorator for running a check before running a method.

[![NPM](https://nodei.co/npm/ts-guard-decorator.png?compact=true)](https://nodei.co/npm/ts-guard-decorator)


## Installation

```shell
npm install --save ts-guard-decorator
```


## Usage

Decorators are supported in [TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html) or with [Babel](https://babeljs.io/docs/plugins/transform-decorators/).

```js
import guard from 'ts-guard-decorator';

class MyClass {
  // Don't run `myFunc` if `window` doesn't exist
  @guard(typeof window !== 'undefined')
  myFunc() {
    // ...
  }
}
```

This is equivalent to writing:

```js
class MyClass {
  myFunc() {
    if (typeof window === 'undefined') {
      return;
    }
    // ...
  }
}
```


### Arguments

The guard accepts 2 arguments:
1. A boolean expression (i.e. something that evaluates to `true` or `false`) indicating whether the method should run.
2. A optional return value if the method should _not_ run.

```js
function testGuardFunc(arg1, arg2) {
  return arg1 === arg2;
}

class TestClass {
  @guard(true)
  guardTrue() {
    return true;
  }  //=> true

  @guard(false)
  guardFalse() {
    return true;
  }  //=> undefined

  @guard(true, 'hello')
  guardTrueRetVal() {
    return true;
  }  //=> true

  @guard(false, 'hello')
  guardFalseRetVal() {
    return true;
  }  //=> "hello"

  @guard(testGuardFunc(1, 1), 'hello')
  guardTrueFunc() {
    return true;
  }  //=> true

  @guard(testGuardFunc(1, 2), 'hello')
  guardFalseFunc() {
    return true;
  }  //=> "hello"
}
```
