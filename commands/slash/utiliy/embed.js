const {
    ApplicationCommandType,
    Client,
    CommandInteraction,
    PermissionFlagsBits,
    ActionRowBuilder, 
    ModalBuilder, 
    TextInputBuilder, 
    TextInputStyle
} = require("discord.js");

module.exports = {
    name: "embed",
    description: "Send An Embed",
    category: "Utility",
    type: ApplicationCommandType.ChatInput,
    userPermissions: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        // code

        const modal = new ModalBuilder()
            .setCustomId('embeder')
            .setTitle('Embed Maker');

        // Add components to modal

        // Create the text input components
        const channelIdInput = new TextInputBuilder()
            .setCustomId('channelIdInput')
            // The label is the prompt the user sees for this input
            .setLabel("Id Of Channel You Wanna Send Embed")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);

        const pingContent = new TextInputBuilder()
            .setCustomId('pingContent')
            // The label is the prompt the user sees for this input
            .setLabel("Ping or Any Main Content")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short);

        const jsonInput = new TextInputBuilder()
            .setCustomId('jsonInput')
            .setLabel("Json Of Embed You Wanna Send")
            // Paragraph means multiple lines of text.
            .setStyle(TextInputStyle.Paragraph);

        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new ActionRowBuilder().addComponents(channelIdInput);
        const secondActionRow = new ActionRowBuilder().addComponents(pingContent);
        const thirdActionRow = new ActionRowBuilder().addComponents(jsonInput);

        // Add inputs to the modal
        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

        // Show the modal to the user
        await interaction.showModal(modal);

    },
};