import { Telegraf, Context, session } from 'telegraf'
import logger from './logger'

const bot = new Telegraf(process.env.TOKEN)

bot.use(session(), (ctx: Context, next: () => any): void => {
  
  return next()
})

bot.catch(logger)

export default bot