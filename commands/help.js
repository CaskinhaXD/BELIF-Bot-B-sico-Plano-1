const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();
  const content = args.join(" ");
  if (!args[0]) {
    return message.channel.send(`.
        Olá você pediu ajuda?
        
        *Vim aqui te ajudar* :grinning:

        **Categorias:**

        - **Diversão** :zany_face: : Utilize b!helpdiversao para ver os comandos

        - **Sobre Mim** :robot: : Utilize b!dev para ver os comandos

        - **Geral** :flag_br: : Utilize b!helpgeral para ver os comandos
  `)
  }
}