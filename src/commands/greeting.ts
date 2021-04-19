import { Telegraf, Context } from 'telegraf'

export default (bot: Telegraf<Context>): void => {
  bot.command(['help', 'start'], (ctx: Context) => {
    
  })
}