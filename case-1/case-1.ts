const stringInput = "[({]})]";

export const validateString = (input: string): boolean => {
    const matchingString: Record<string,string> = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    const stack: string[] = [];
    for (const char of input) {
    if ('([{'.includes(char)) {
      stack.push(char);
    } else if (')]}'.includes(char)) {
      if (stack.pop() !== matchingString[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(validateString(stringInput));