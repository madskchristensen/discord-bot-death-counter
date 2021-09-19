const fs = require('fs')

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function saveToDb(db) {
    fs.writeFile('./db.json', JSON.stringify(db, null, 4), 'utf-8', () => {})
}

function stripFirstCharacter(string) {
    return string.slice(1)
}

function getDb() {
    return require('./db.json')
}

function doesPersonExist(person) {
    const db = getDb()

    if (db.deaths.hasOwnProperty(person)) {
        return true
    }
    return false
}

function getRandomPhrase() {
    const phrases = [
        'Gee whiz!',
        'Holy moly!',
        'Damn!',
        'Sheeeet!',
        'Wow!',
        `I'm speechless!`,
        'Lol!',
        'Poor guy!',
        `That's a bummer!`,
        `What's going on!`,
        `Valar Morghulis!`,
        `Hmmm!`,
    ]

    const random = Math.floor(Math.random() * phrases.length)

    return phrases[random]
}

function getArgs(msg) {
    const args = msg.split(' ')

    if (args.length === 3) {
        const operator = args[1]

        if (operator === '+' || operator === '-') {
            return args
        }
    }

    return undefined
}

function isMessageInvalid(msg) {
    // is not a command -> Do nothing
    if (msg.content.charAt(0) !== '!') {
        return true
    }

    // since bot replies with a message, this would emit a messageCreate causing a recursive loop
    // checking if the author is bot will fix this
    if (msg.author.bot) {
        return true
    }
}

module.exports = {
    capitalizeFirstLetter,
    saveToDb,
    stripFirstCharacter,
    getDb,
    doesPersonExist,
    getArgs,
    isMessageInvalid,
    getRandomPhrase,
}
