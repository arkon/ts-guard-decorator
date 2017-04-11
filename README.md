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

The guard accepts 2 types of parameters:

1. A boolean expression (i.e. something that evaluates to `true` or `false`).

```typescript
class MyClass {
  @guard(true)
  myFunc1() {}  // runs

  @guard(false)
  myFunc2() {}  // won't run

  @guard(1 === 1)
  myFunc3() {}  // runs

  @guard(1 === 2)
  myFunc4() {}  // won't run
}
```

2. A function reference and arguments.

```typescript
function myGuardFunc(arg1: any, arg2: any): boolean {
  return arg1 === arg2;
}

class MyClass {
  @guard(myGuardFunc, 1, 1)
  myFunc1() {}  // runs

  @guard(myGuardFunc, 1, 2)
  myFunc2() {}  // won't run
}
```
