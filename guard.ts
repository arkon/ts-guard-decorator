export type GuardCheck = boolean;
export type GuardCheckResolver = (...args: any[]) => boolean;
export type GuardCheckOrResolver = GuardCheck | GuardCheckResolver;

/**
 * A TS method decorator that determines if a method should run or not.
 *
 * @param check {GuardCheckOrResolver} A boolean value or a function that takes in arguments,
 *                                     returning a boolean.
 * @param ...checkArgs {any[]} Arguments for a check function.
 */
export default function (check: GuardCheckOrResolver, ...checkArgs: any[]) {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const shouldRun = (typeof check === 'function') ? check.apply(this, checkArgs) : check;
      if (!shouldRun) {
        return;
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
