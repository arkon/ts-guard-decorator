import { test } from 'ava';
import { TestClass } from './testclass';

test('No guard', t => {
  t.true(new TestClass().noGuard());
});

test('Guard with `true`', t => {
  t.true(new TestClass().guardTrue());
});

test('Guard with `false`', t => {
  t.is(new TestClass().guardFalse(), undefined);
});

test('Guard with invoked function returning `true`', t => {
  t.true(new TestClass().guardTrueFunc());
});

test('Guard with invoked function returning `false`', t => {
  t.is(new TestClass().guardFalseFunc(), undefined);
});

test('Guard with return value but is `true`', t => {
  t.true(new TestClass().guardTrueRetVal());
});

test('Guard with return value and is `false`', t => {
  t.is(new TestClass().guardFalseRetVal(), 'hello');
});
