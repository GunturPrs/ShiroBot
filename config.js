
const fs = require('fs')
const chalk = require('chalk')

// Site API
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey
global.APIKeys = {
	'https://zenzapi.xyz': 'Sua Key API',
}

// Outros
global.owner = ['553189092420','559684237195-1613407792']
global.packname = 'Shiro Bot'
global.author = '\n'
global.sessionName = 'shirosession'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'Recurso especial de admin do grupo!',
    botAdmin: 'O bot deve ser administrador primeiro!',
    owner: 'Este recurso é exclusivo do dono do bot',
    group: 'Isso só pode ser usado em um grupo!',
    private: 'Isso só pode ser usado no privado',
    bot: 'Recursos especial do bot',
    wait: 'Carregando...',
}
global.thumb = fs.readFileSync('./lib/shiro.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
