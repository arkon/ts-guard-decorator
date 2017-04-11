import { test } from 'ava';
import { TestClass } from './testclass';

test('No guard', t => {
  t.is(new TestClass().noGuard(), 'ran');
});

test('Guard with `true`', t => {
  t.is(new TestClass().guardTrue(), 'ran');
});

test('Guard with `false`', t => {
  t.is(new TestClass().guardFalse(), undefined);
});

test('Guard with invoked function returning `true`', t => {
  t.is(new TestClass().guardTrueFunc(), 'ran');
});

test('Guard with invoked function returning `false`', t => {
  t.is(new TestClass().guardFalseFunc(), undefined);
});

test('Guard with function and args returning `true`', t => {
  t.is(new TestClass().guardTrueFuncArgs(), 'ran');
});

test('Guard with function and args returning `false`', t => {
  t.is(new TestClass().guardFalseFuncArgs(), undefined);
});
