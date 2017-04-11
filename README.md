# ts-guard-decorator 🛡

> TypeScript decorator for running a check before running a method.

[![NPM](https://nodei.co/npm/ts-guard-decorator.png?compact=true)](https://nodei.co/npm/ts-guard-decorator)


## Installation

```shell
npm install --save ts-guard-decorator
```


## Usage

```typescript
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

```typescript
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

```typescript
function myGuardFunc(arg1: any, arg2: any): boolean {
  return arg1 === arg2;
}

class MyClass {
  @guard(true)
  myFunc1() {
    return true;
  }  //=> true

  @guard(false)
  myFunc2() {
    return true;
  }  //=> undefined

  @guard(1 === 1)
  myFunc3() {
    return true;
  }  //=> true

  @guard(1 === 2, 'hello')
  myFunc4() {
    return true;
  }  //=> "hello"

  @guard(myGuardFunc(1, 1), 'hello')
  myFunc5() {
    return true;
  }  //=> true

  @guard(myGuardFunc(1, 2), 'hello')
  myFunc6() {
    return true;
  }  //=> "hello"
}
```
