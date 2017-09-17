declare class Student {
  firstName: string;
  middleInitial: string;
  lastName: string;
  fullName: string;
  constructor(firstName: string, middleInitial: string, lastName: string);
}
interface Person {
  firstName: string;
  lastName: string;
}
interface RawResult<T> {
  sessionId: string;
  value: T;
  state: 'failure' | 'success';
  selector?: string;
  message?: string;
  hCode?: number;
  class?: string;
  error?: string;
}

declare function greeter(person: Person): string;

export { Person, Student, greeter, RawResult };

declare global {
  interface myInterface<T> {
      toObservable(): String
  }
}

declare global {
  namespace NodeJS {
    interface Global {
        myConfig: {
          a: number;
          b: number;
        }
    }
  }
}