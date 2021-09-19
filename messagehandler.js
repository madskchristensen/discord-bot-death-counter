// funktion som tager imod mesage
// fjern ! fra message
// Sammenlign db.json med message
    // hvis message findes som key så tilføj død
    // ellers skriv at personen ikke findes

/* client.on('messageCreate', (msg) => {
    let dbJson = require('./db.json')

    let person = capitalizeFirstLetter(msg.content.slice(1))

    switch(msg.content.toLowerCase()) {
        case '!stefan':
            db.deaths.stefan = Number(db.deaths.stefan) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.stefan} times`)

            break

        case '!madda':
            db.deaths.madda = Number(db.deaths.madda) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.madda} times`)

            break

        case '!stalin':
            db.deaths.stalin = Number(db.deaths.stalin) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.stalin} times`)

            break

        case '!claus':
            db.deaths.claus = Number(db.deaths.claus) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.claus} times`)

            break

        case '!henrik':
            db.deaths.henrik = Number(db.deaths.henrik) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.henrik} times`)

            break

        case '!bøvle':
            db.deaths.bøvle = Number(db.deaths.bøvle) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.bøvle} times`)

            break

        case '!patrick':
            db.deaths.patrick = Number(db.deaths.patrick) + 1
            saveToDb(dbJson)

            msg.reply(`Death recorded! ${person} has now died a total of ${db.deaths.patrick} times`)

            break

        case '!reset':
            if (msg.author.username === 'madda') {
                const dbEmpty = {
                    "deaths": {
                        "stefan": 0,
                        "madda": 0,
                        "claus": 0,
                        "stalin": 0,
                        "henrik": 0,
                        "bøvle": 0,
                        "patrick": 0
                    }
                }

                saveToDb(dbEmpty)

                msg.reply('All deaths have been reset!')

            } else {
                msg.reply('Only maddabizh can use this command :))')
            }

            break

        case '!overview':
            let overview = ''

            for (const [key, value] of Object.entries(db.deaths)) {
                overview += `${capitalizeFirstLetter(key)}: ${value}\n`
            }

            msg.reply(overview)

            break

        case 'lorte bot':
            msg.reply(':(')

            break
    }
}) */