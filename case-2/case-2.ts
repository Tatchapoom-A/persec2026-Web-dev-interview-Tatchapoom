const input: string[] = ["TH19", "SG20" , "TH2"];

export function sortStrings(arr: string[]): string[] {
  return arr.sort((a, b) => {
    
    const parse = (s: string): [string, number, string] => {
      const match = s.match(/^([A-Za-z]+)(\d+)(.*)$/);
      if (match) {
        return [match[1], parseInt(match[2], 10), match[3]];
      }
      return [s, 0, ''];
    };

    const [prefixA, numA, suffixA] = parse(a);
    const [prefixB, numB, suffixB] = parse(b);

    if (prefixA !== prefixB) {
      return prefixA.localeCompare(prefixB);
    }

    if (numA !== numB) {
      return numA - numB;
    }

    return suffixA.localeCompare(suffixB);
  });
}

const result = sortStrings(input);
console.log(sortStrings(result))