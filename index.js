const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI2ODcwNTMzMTI2MTE1MzQ5.YdB9cw.6MHehG8dB5pQh76qZdNzbjzK7Yg"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)