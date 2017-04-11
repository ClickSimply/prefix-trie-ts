export declare class Trie {
    constructor(input: string[]);
    addWord(word: string): this;
    removeWord(word: string): this;
    getPrefix(strPrefix: string): string[];
}
