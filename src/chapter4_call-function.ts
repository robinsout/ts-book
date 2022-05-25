function call<T extends string[], R>(
    f: (length: number, ...args: T) => R,
    length: number,
    ...args: T
  ): R {
    return f(length, ...args);
  }
  
  function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value);
  }
  
  call(fill, 10, 'a');
  