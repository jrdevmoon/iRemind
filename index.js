const data = {}
data.root = __dirname
data.app = `${data.root}/app`

const appFiles = require ('fs').readdirSync (data.app)
const appFilesPath = []
const appNames = []
const apps = {}

for (let a in appFiles)
{
  appFilesPath[a] = `${data.app}/${appFiles[a]}`

  appNames[a] = require ('path').parse (appFilesPath[a]).name

  if (typeof require (appFilesPath[a]) ===  'function')
  {
    apps[appNames[a]] = require (appFilesPath[a]) (apps)
  }
  else
  {
    //apps[]
  }
}

console.log (apps)