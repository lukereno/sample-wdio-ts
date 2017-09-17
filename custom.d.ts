declare global {
  namespace NodeJS {
    interface Global {
        myConfiga: {
          a: number;
          b: number;
        }
    }
  }
}