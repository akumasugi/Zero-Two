import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    💖My Darling Group💖\n\n*💖ℤ𝔼ℝ𝕆 𝕋𝕎𝕆 support group:💖* *https://chat.whatsapp.com/EeIT4nf7PBUD8Kwbm4FgJC*\n\n`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/bb198d808e2be9bfa72ac.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Darling please check your personal text.\n` }
        )

        }
}
