const itemsArray: string[] = [ "Mother", "Think", "Worthy", "Apple", "Adnroid"]

export const autocomplete = (search: string, items: string[], maxResult: number) => {
    const searchLowerCase = search.toLocaleLowerCase();
    const targetItems = items.filter(i => i.toLocaleLowerCase().includes(searchLowerCase));
    targetItems.sort((a,b) => {
        const indexA = a.toLocaleLowerCase().indexOf(searchLowerCase);
        const indexB = b.toLocaleLowerCase().indexOf(searchLowerCase);

        return indexA - indexB;
    })
    return targetItems.slice(0, maxResult)
};

const result = autocomplete("th", itemsArray, 2);

console.log(result);