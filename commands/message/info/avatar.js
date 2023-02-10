const { Client, Message } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "get avatar of user",
  category: "info",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    // code
    await message.reply({
      content: `${message.author.displayAvatarURL({
        extension: "png",
        size: 512,
      })}`,
    });
  },
};
