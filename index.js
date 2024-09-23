const FilePlotter = class
{
  #fs
  #path
  constructor (filePath)
  {
    this.#fs = require ('fs')
    this.filePath = filePath
    this.#path = require ('path')
    this.temp = {}
    this.fileSystem = []
    this.#mapFile ({filePath:this.filePath, fileSystem:this.fileSystem})
  }
  #mapFile (obj)
  {
    if (obj.filePath)
    {
      this.temp.filePath = obj.filePath
      this.temp.exists = this.#fs.existsSync (this.temp.filePath)
      if (this.temp.exists)
      {  
        if (this.#fs.statSync (this.temp.filePath).isDirectory ())
        {
          this.temp.type = 'folder'
          
        }
        if (this.#fs.statSync (this.temp.filePath).isFile ())
        {
          this.temp.type = 'file'

          this.temp.data = this.#path.parse (this.temp.filePath)

          obj.fileSystem.push ({data: this.temp.data})
        }
      }
    }
  }
}

const fsp = new FilePlotter (__dirname + "/index.js")

console.dir (fsp, {depth: 10})