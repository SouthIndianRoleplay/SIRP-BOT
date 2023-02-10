const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    let allCommands = [];
    readdirSync("./commands/slash").forEach((dir) => {
      const commands = readdirSync(`./commands/slash/${dir}`).filter((f) =>
        f.endsWith(".js")
      );

      for (const cmd of commands) {
        const command = require(`../commands/slash/${dir}/${cmd}`);
        if (command.name) {
          client.scommands.set(command.name, command);
          allCommands.push(command);
        } else {
          console.log(`${cmd} is not ready`);
        }
      }
    });
    console.log(`${client.scommands.size} Slash Commands Loaded`);

    client.on("ready", async () => {
      // client.application.commands.set(allCommands);
      client.guilds.cache.get("740547824105554033").commands.set(allCommands);
    });
  } catch (error) {
    console.log(error);
  }
};
