const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        *Hum... Então você que saber os nossos comandos para saber mais sobre mim*

        *Aqui estão.*
        
        **Commands:**
        
        :white_small_square: **b!mydev** :desktop: : *Mostra quem construiu esse bot lindo, quem construiu é mais lindo ainda.
  `)
  }
}