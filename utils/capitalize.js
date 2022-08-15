export function capitalize(word) {
    if (word === null) return null;
    const firstLetter = word.slice(0, 1);
    const letters = word.slice(1, word.length);

    return `${firstLetter.toUpperCase()}${letters}`;
}
