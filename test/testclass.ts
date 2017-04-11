import guard from '../dist/guard';

const dummyGuard = (bool: boolean) => {
  return bool;
};

export class TestClass {
  noGuard(): string {
    return 'ran';
  }

  @guard(true)
  guardTrue(): string {
    return 'ran';
  }

  @guard(false)
  guardFalse(): string {
    return 'ran';
  }

  @guard(dummyGuard(true))
  guardTrueFunc(): string {
    return 'ran';
  }

  @guard(dummyGuard(false))
  guardFalseFunc(): string {
    return 'ran';
  }

  @guard(dummyGuard, true)
  guardTrueFuncArgs(): string {
    return 'ran';
  }

  @guard(dummyGuard, false)
  guardFalseFuncArgs(): string {
    return 'ran';
  }
}
