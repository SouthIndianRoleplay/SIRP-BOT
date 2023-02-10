const {
  ApplicationCommandType,
  Client,
  CommandInteraction,
} = require("discord.js");

module.exports = {
  name: "avatar",
  description: "get user avatar",
  category: "Utility",
  type: ApplicationCommandType.ChatInput,

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // code
    await interaction.reply({
      content: `${interaction.user.displayAvatarURL({
        extension: "png",
        size: 512,
      })}`,
    });
  },
};
