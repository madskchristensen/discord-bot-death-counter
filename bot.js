// https://buddy.works/tutorials/how-to-build-a-discord-bot-in-node-js-for-beginners

require('dotenv').config()
const { Client, Intents, Message } = require('discord.js')
const util = require('./util')
const mathjs = require('mathjs')

// intents define which type of events a bot will recieve
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!\n`)
})

client.on('messageCreate', (msg) => {
    // if message contains error - don't run rest of function
    if (util.isMessageInvalid(msg)) {
        return
    }

    console.log(`Message: ${msg.content}`)

    // load db
    const db = util.getDb()

    // remove exclamation mark
    msg.content = msg.content.slice(1)

    // get args
    const args = util.getArgs(msg.content)

    // if args is undefined (an error occured) exit function
    if (!args) {
        msg.reply('Wrong format! Must match: "!name operator value"')

        return
    }

    // save args to variables
    const [person, operator, value] = args

    // uppercase person name for use with reply
    const personUppercase = util.capitalizeFirstLetter(person)

    // if person exists in db.json
    if (util.doesPersonExist(person)) {
        const deaths = mathjs.evaluate(
            `${db.deaths[person]} ${operator} ${value}`
        )

        if (deaths < 0) {
            msg.reply(`You can't die less than 0 times!`)

            return
        }

        db.deaths[person] = deaths

        util.saveToDb(db)

        msg.reply(
            `${util.getRandomPhrase()} ${personUppercase} has now died ${
                db.deaths[person]
            } times.`
        )
    } else {
        msg.reply(`${util.capitalizeFirstLetter(personUppercase)} not found!`)
    }
})

// Should ALWAYS be last //
client.login(process.env.CLIENT_TOKEN)
