const { InteractionType } = require('discord.js');
const client = require('../index')

client.on("interactionCreate", async (interaction) => {
    
	if (interaction.type == InteractionType.ModalSubmit) {
        if (interaction.customId == 'embeder') {
            await interaction.reply({ content: 'Your submission was received successfully!' });
            
            // Get the data entered by the user
            const channelIdInput = interaction.fields.getTextInputValue('channelIdInput');
            const pingcontent = interaction.fields.getTextInputValue('pingContent');
            const jsonInput = interaction.fields.getTextInputValue('jsonInput');
            // console.log({ channelIdInput,pingcontent, jsonInput });
            
            const channelID = client.channels.cache.find(channel => channel.id === channelIdInput)
            // console.log(channelID)

            let embed = jsonInput;
            try {
                embed = JSON.parse(jsonInput);
            } catch (e) {
                return interaction.reply({ content: "JSON seems invalid", ephemeral: true });
            }
            channelID.send({content: pingcontent, embeds: [ embed ]})
        }
    }
});