
const cats = [ "Milo", "Otis", "Garfield"   
] 
//cats.push("Ralph")
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name)
    return copyOfCats
}
function prependCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.unshift(name)
    return copyOfCats
}
function removeLastCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.pop(name)
    return copyOfCats
}
function removeFirstCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.shift(name)
    return copyOfCats
}