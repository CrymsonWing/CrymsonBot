import DiscordJS, { Intents, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const prefix = '-';

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES  
    ]
})

client.on('ready', () => {
    console.log('CrymsonBot is online')

//   const guildId = '924757418494296174'
//   const guild = client.guilds.cache.get(guildId)
//   let commands

//   if (guild) {
//     commands = guild.commands
//   } else {
//       commands = client.application?.commands
//   }

//   commands?.create({
//       name: 'ping',
//       description: 'Replies with pong.',
//   })
})

// client.on('interactionCreate', (interaction) => {
//   if (!interaction.isCommand()) {
//     return
//   }

//   const { commandName, options } = interaction

//   if (commandName === 'ping') {
//     interaction.reply({
//       content: 'pong',
//       ephemeral: true,
//     })
//   }
// })

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift()?.toLowerCase();

    if(command === 'vent'){
        message.channel.send('Youre hidden now, they cant get you...')
    } else if (command == 'kill'){
        message.channel.send('YOU GOT HIM RUN RUN RUN')
    } else if (command == 'vote'){
        message.channel.send('They were mad sus, gotta vote em off..')
    } else if (command == 'task'){
        message.channel.send('```Task complete. Hurry to your next one mate```')
    } else if (command == 'crewmate'){
        message.channel.send('**You are a crewmate, complete your tasks and find the imposter.**')
    } else if (command == 'imposter'){
        message.channel.send('Uhh uhhh, jit wanna be the imposterr..really thought it was assassins creed..no way...')
    }
})


client.on('messageCreate', (message) => {
    if (message.content === 'vented') {
      message.reply({
          content: 'YOU VENTED?? AYOO???',
      })   
    } else if (message.content == 'mogus'){
        message.reply({
          content: '**shoots** im sorry but we gotta put you down..' 
      })
    } else if (message.content == 'among us'){
        message.reply({
          content: 'Among us...I havent heard that name in years...'  
      })
    } else if (message.content == 'sus'){
        message.reply({
          content: 'Thats one of the sussiest things I ever heard'  
      })
    } else if (message.content == 'imposter'){
        message.reply({
          content: 'Thats a bit sussy'
      })
    } 
  })


client.login(process.env.TOKEN)