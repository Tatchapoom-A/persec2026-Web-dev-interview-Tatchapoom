
interface RomanMapping {
  value: number;
  symbol: string;
}

export const intToRoman = (number: number): string => {
    const romanMap: RomanMapping[] = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";
    for (const item of romanMap) {
        while (number >= item.value) {
            result += item.symbol;
            number -= item.value;
        }
    }

    return result;
}

export function romanToInt(roman: string): number {
    const romanValues: Record<string,number> = {
        'I': 1, 
        'V': 5, 
        'X': 10, 
        'L': 50,
        'C': 100, 
        'D': 500, 
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {

        const currentRoman = roman[i];
        const nextRoman = roman[i + 1];

        let currentVal = romanValues[currentRoman];
        let nextVal = romanValues[nextRoman];

        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}

const input = 5432;
const romanResult = intToRoman(input);
const intResult = romanToInt(romanResult)

console.log("Int to Roman: ", romanResult);
console.log("Roman to Int: ", intResult);