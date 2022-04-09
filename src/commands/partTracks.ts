import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js';
import Command from '../interfaces/command';

const songs: { name: string, url: string }[] = [{
    name: '9 to 5',
    url: 'https://drive.google.com/drive/folders/1fy87OYmKX1Ggy7t4hBYz2Be8nItM7ksM?usp=sharing',
}, {
    name: 'Accidentally in Love',
    url: 'https://drive.google.com/drive/folders/15itPqkrK4x3Uxhb0239DPRaBwHz2S4xn?usp=sharing',
}, {
    name: 'Secondhand White Baby Grand',
    url: 'https://drive.google.com/drive/folders/1B4MpTaYyRtwufaJXFJf7qdlb8x53_2PP?usp=sharing',
}, {
    name: 'Thee Just Keep Moving the Line',
    url: 'https://drive.google.com/drive/folders/1U7NOYZjKYlcbU8APQlLfZMu2hOwxLXgU?usp=sharing',
}, {
    name: 'You Will Be Found',
    url: 'https://drive.google.com/drive/folders/1kmix1k2IfRgcCV_yQ1GTuxZ9TI12hU5_?usp=sharing',
}];

export const partTracks: Command = {
    data: new SlashCommandBuilder()
        .setName('tracks')
        .setDescription('Gets links to all QA part track folders for quick access'),
    run: async (interaction) => {
        const embed = new MessageEmbed();
        embed.setTitle('Part Tracks');
        embed.setURL('https://drive.google.com/drive/folders/1yLx7P8IjjUqhMIvEvngDpgo7RVc9HHOP?usp=sharing');
        const embedLinks = new MessageActionRow()
            .addComponents(
                songs.map(({ name, url }) => new MessageButton()
                    .setStyle('LINK')
                    .setURL(url)
                    .setLabel(name)),
            );
        await interaction.reply({ embeds: [embed], components: [embedLinks] });
    },
};
