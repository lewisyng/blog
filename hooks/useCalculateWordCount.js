export const useCalculateWordCount = (content) => {
    // content is provided in markup format by sanity
    // we need to filter the text out of this object
    const wordCount = content[0].body.reduce((acc, curr) => {
        let currentWordLength = 0
        curr.children.map(child => currentWordLength += child.text.split(" ").length)
        return acc + currentWordLength
    }, 0)

    return [wordCount]
}

export default useCalculateWordCount;