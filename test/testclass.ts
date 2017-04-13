import guard from '../';

function testGuardFunc(arg1: any, arg2: any): boolean {
  return arg1 === arg2;
}

export class TestClass {
  noGuard(): boolean {
    return true;
  }

  @guard(true)
  guardTrue(): boolean {
    return true;
  }

  @guard(false)
  guardFalse(): boolean {
    return true;
  }

  @guard(true, 'hello')
  guardTrueRetVal(): boolean {
    return true;
  }

  @guard(false, 'hello')
  guardFalseRetVal(): boolean {
    return true;
  }

  @guard(testGuardFunc(1, 1), 'hello')
  guardTrueFunc(): boolean {
    return true;
  }

  @guard(testGuardFunc(1, 2), 'hello')
  guardFalseFunc(): boolean {
    return true;
  }
}
