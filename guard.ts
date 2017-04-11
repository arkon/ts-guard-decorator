/**
 * A TS method decorator that determines if a method should run or not.
 *
 * @param shouldRun {boolean} Whether the method should run.
 * @param retValue  {any}     An optional return value if the method shouldn't run.
 */
export default function (shouldRun: boolean, retValue?: any) {
  return function (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      return shouldRun ? originalMethod.apply(this, args) : retValue;
    };

    return descriptor;
  };
}
