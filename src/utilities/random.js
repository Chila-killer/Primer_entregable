const getRandomElement = e => {
    const randomIndex = Math.floor(Math.random() * e.length)
    return e[randomIndex]
}

export {
    getRandomElement
}