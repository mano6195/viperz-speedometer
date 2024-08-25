fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'mano.6195'


ui_page 'web/index.html'

files {
  'web/*.html',
  'web/*.css',
  'web/*.js',
}

shared_scripts {
  '@ox_lib/init.lua'
}

client_scripts {
  'client/*.lua'
}