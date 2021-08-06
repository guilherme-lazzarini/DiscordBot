const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos



client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;



    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    //console.error('Erro:' + err);
  }
});


client.on("ready", () => {


  let activities = [
      `Lost`,
      `Lost`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 5000); 
  client.user
      .setStatus("available")
      .catch(console.error);
console.log("Lost On!");


});

/*

client.on("guildMemberAdd" ,(member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id == "862178124040765460"); // ALTERA ID DA SALA NO SERVIDOR

  const embed = new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setImage("https://media.discordapp.net/attachments/852733623626104892/862475977028665344/gEFNUPvwGrSagqGB9mDa6C21R4M.jpg?width=842&height=473")
      .setDescription(`Teste`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Hyouka Discord")
      .setTimestamp();

    channel.send(embed);
  
});*/

client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});

/*client.on("guildMemberAdd" ,(member) => {
  const channel = member.guild.channels.cache.find(channel => channel.id == "862178124040765460");  // ALTERA ID DA SALA NO SERVIDOR

  const embed = new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setImage("https://media.discordapp.net/attachments/852733623626104892/862475977028665344/gEFNUPvwGrSagqGB9mDa6C21R4M.jpg?width=842&height=473")
      .setDescription(`Teste`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Hyouka Discord")
      .setTimestamp();

    channel.send(embed);
  
});*/

client.login("ODYxNzEyOTkyOTczMzU3MDg4.YONyww.olF4t9LAFgUPUKou1zoEaI-c3CQ"); //Ligando o Bot caso ele consiga acessar o tokenTE~