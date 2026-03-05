
export const Tribonacci = (startValue: number[], length: number): number[] => {

    if (length === 0) return [];

    if (length <= startValue.length) {
        return startValue.slice(length);
    }

    const result: number[] = [...startValue];
    for (let i = startValue.length; i < length; i++) {
        const nextSum = result[i - 1] + result[i - 2] + result[i - 3];
        result.push(nextSum);
    }
    return result;
}

const result = Tribonacci([1,2,3], 5);
console.log(result);