export function capitalize(word) {
    const firstLetter = word.slice(0, 1);
    const letters = word.slice(1, word.length);

    return `${firstLetter.toUpperCase()}${letters}`;
}
