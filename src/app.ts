import 'module-alias/register'
import 'dotenv/config'
import '@/models'
import bot from './helpers/bot'
import greeting from './commands/greeting'

// Commands
greeting(bot)

bot.launch()