declare class StudentA {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string);
}
interface PersonA {
    firstName: string;
    lastName: string;
}
interface RawResultA<T> {
    sessionId: string;
    value: T;
    state: 'failure' | 'success';
    selector?: string;
    message?: string;
    hCode?: number;
    class?: string;
    error?: string;
}
declare function greeterA(person: PersonA): string;
export { PersonA, StudentA, greeterA, RawResultA };
