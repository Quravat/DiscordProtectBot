const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const config = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });

let messageCount = {};

client.on('ready', () => {
  console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (config.antiSpam) {
    if (!messageCount[message.author.id]) messageCount[message.author.id] = { count: 0, timer: Date.now() };
    const user = messageCount[message.author.id];
    const timeDifference = Date.now() - user.timer;

    if (timeDifference < 5000) {
      user.count++;
    } else {
      user.count = 1;
      user.timer = Date.now();
    }

    if (user.count > 5) {
      message.delete();
      message.channel.send(`${message.author.tag} a été mis en timeout pour spam !`);
      try {
        await message.member.timeout(60000, 'Spam détecté').catch(err => {
          const logsChannel = message.guild.channels.cache.get(config.salonLogs.terminal);
          if (logsChannel) {
            const embed = new EmbedBuilder()
              .setColor('#FF0000')
              .setTitle('Erreur Timeout Anti-Spam')
              .addFields(
                { name: 'Utilisateur', value: `${message.author.tag} (${message.author.id})`, inline: true },
                { name: 'Erreur', value: `Impossible de mettre en timeout. ${err.message}`, inline: true }
              )
              .setTimestamp();
            logsChannel.send({ embeds: [embed] });
          }
          console.log('Erreur lors du timeout:', err);
        });
        
        const logsChannel = message.guild.channels.cache.get(config.salonLogs.antiSpam);
        if (logsChannel) {
          const embed = new EmbedBuilder()
            .setColor('#FF0000')
            .setTitle('Action Anti-Spam')
            .addFields(
              { name: 'Utilisateur', value: `${message.author.tag} (${message.author.id})`, inline: true },
              { name: 'Action', value: 'Timeout pour spam', inline: true },
              { name: 'Durée', value: '1 minute', inline: true },
              { name: 'Channel', value: `<#${message.channel.id}>`, inline: true }
            )
            .setTimestamp();
          logsChannel.send({ embeds: [embed] });
        }
      } catch (err) {
        console.error('Erreur lors de l\'application du timeout :', err);
      }
    }
  }

  if (config.antiRaid && message.guild) {
    if (message.guild.members.cache.size > 1000) {
      message.guild.members.cache.forEach(member => {
        if (member.user.bot) member.kick();
      });

      const logsChannel = message.guild.channels.cache.get(config.salonLogs.antiRaid);
      if (logsChannel) {
        const embed = new EmbedBuilder()
          .setColor('#FF0000')
          .setTitle('Action Anti-Raid')
          .setDescription('Des bots ont été expulsés en raison d\'un raid détecté.')
          .addFields(
            { name: 'Channel', value: `<#${message.channel.id}>`, inline: true },
            { name: 'Action', value: 'Bots expulsés', inline: true }
          )
          .setTimestamp();
        logsChannel.send({ embeds: [embed] });
      }
    }
  }
});

client.on('guildMemberAdd', async (member) => {
  if (config.antiBot && member.user.bot) {
    await member.kick();

    const logsChannel = member.guild.channels.cache.get(config.salonLogs.antiBot);
    if (logsChannel) {
      const embed = new EmbedBuilder()
        .setColor('#FF0000')
        .setTitle('Action Anti-Bot')
        .addFields(
          { name: 'Bot expulsé', value: `${member.user.tag} (${member.user.id})`, inline: true },
          { name: 'Action', value: 'Expulsion', inline: true },
          { name: 'Channel', value: 'Aucun', inline: true }
        )
        .setTimestamp();
      logsChannel.send({ embeds: [embed] });
    }
  }
});

client.login(config.token);
