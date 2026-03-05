export const reSequenceInt = (number: number): number => {
    const arrayString = number.toString().split("");
    arrayString.sort((a,b) => {
        const numberA = parseInt(a, 10);
        const numberB = parseInt(b, 10);
        return numberB - numberA
    })
    const result = arrayString.join('');
    return parseInt(result, 10);
}

const result = reSequenceInt(4837281);
console.log(result);