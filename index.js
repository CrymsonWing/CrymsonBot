"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prefix = '-';
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('CrymsonBot is online');
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
});
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
client.on('message', message => {
    var _a;
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (command === 'vent') {
        message.channel.send('Youre hidden now, they cant get you...');
    }
    else if (command == 'kill') {
        message.channel.send('YOU GOT HIM RUN RUN RUN');
    }
    else if (command == 'vote') {
        message.channel.send('They were mad sus, gotta vote em off..');
    }
    else if (command == 'task') {
        message.channel.send('```Task complete. Hurry to your next one mate```');
    }
    else if (command == 'crewmate') {
        message.channel.send('**You are a crewmate, complete your tasks and find the imposter.**');
    }
    else if (command == 'imposter') {
        message.channel.send('Uhh uhhh, jit wanna be the imposterr..really thought it was assassins creed..no way...');
    }
});
client.on('messageCreate', (message) => {
    if (message.content === 'vented') {
        message.reply({
            content: 'YOU VENTED?? AYOO???',
        });
    }
    else if (message.content == 'mogus') {
        message.reply({
            content: '**shoots** im sorry but we gotta put you down..'
        });
    }
    else if (message.content == 'among us') {
        message.reply({
            content: 'Among us...I havent heard that name in years...'
        });
    }
    else if (message.content == 'sus') {
        message.reply({
            content: 'Thats one of the sussiest things I ever heard'
        });
    }
    else if (message.content == 'imposter') {
        message.reply({
            content: 'Thats a bit sussy'
        });
    }
});
client.login(process.env.TOKEN);
