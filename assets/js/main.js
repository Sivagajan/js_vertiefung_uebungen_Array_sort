console.log('first')

console.log('Lev1_1')

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
]

languagesSorted = [...languages]

let sortierung = () => {

    console.log(languagesSorted.sort())
}
sortierung()



console.log('Lev1_2')

let languagesReverse = [...languages]
console.log(languagesReverse)

let sortierungReverse = () => {

    languagesReverse.sort()
    languagesReverse.reverse()

    console.log(languagesReverse)
}

sortierungReverse()



console.log('Lev2_2')

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000]
console.log(numArray2)

numArray2.sort((a,b) => a-b)

console.log(numArray2)