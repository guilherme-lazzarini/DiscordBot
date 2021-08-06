//by Lost
const discord = require('discord.js'); //Define the discord.js module
//const client = new discord.Client(); //Creating discord.js client (constructor)

const button = require('discord-buttons');


module.exports.run = (client, message, args) => {

  let btnticket = new button.MessageButton()
  .setStyle('gray')
  .setLabel(':envelope: Abrir Ticket')
  .setID('btnticket')

  let row1 = new button.MessageActionRow()
    .addComponent(btnticket)

    const embed = new discord.MessageEmbed()
      .setColor('GREEN')
      .addFields(
        { name: 'COMO ABRIR UM SUPORTE', value: " Basta clicar no Botão abaixo e você será Redirecionado a equipe de suporte.\n\nSituações na qual abrir um suporte:\n- Doações\n- Duvidas sobre advertências e banimentos\n- Bugs que estão afetando o roleplay!\n    - Sets de membros de organizações ( Aceito apenas por lideres e sub-lideres)" },
        { name: 'Situações na qual não abrir um suporte:', value: "- Sugestões ( Utilize a sala #:pager:┃ꜱᴜɢᴇꜱᴛᴏᴇꜱ )\n- Comandos (Utilize o menu F9 e a sala #:question:┃ᴄᴏᴍᴀɴᴅᴏꜱ-ʀᴘ )\n- ''Meu carro desapareceu'' (Chame um taxi e ajude o mesmo a desenvolver seu roleplay)\n- ''Bugou e meu carro furou os pneus'' (Chame um mecânico e ajude o mesmo a desenvolver seu roleplay )" },
        { name: 'EXEMPLO PARA ABERTURA DE SUPORTES', value: "SEU NOME:\nSEU ID:\nMOTIVO:" })


    message.channel.send({
      embed: embed,
      components: [row1]
    }
    );
  
}