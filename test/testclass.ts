import guard from '../dist/guard';

function dummyGuard(bool: boolean) {
  return bool;
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

  @guard(dummyGuard(true))
  guardTrueFunc(): boolean {
    return true;
  }

  @guard(dummyGuard(false))
  guardFalseFunc(): boolean {
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
}
