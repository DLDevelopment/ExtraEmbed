const SubEmbed = require('../../SubEmbed.js');
const { EmbedBuilder } = require('discord.js');

// def subembed
const subembed = new SubEmbed()
    .setTitle('Test SubEmbed')
    .setDescription('This is a test subembed')
    .addField('test_1', 'value_1')
    .addField('test_2', 'value_2')
    .toString()
// define embed
const embed = new EmbedBuilder()
    .setTitle('Test Embed')
    .setDescription(subembed)
    .setColor(0xf50906)
    .setURL('https://google.com');