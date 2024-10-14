const FSM = class{
  #path
  #fs
  constructor (path)
  {
    this.#fs = require ('fs')
    this.#path = require ('path')
    this.fs = []
    this.count = 0
    this.#map (path, this.fs)
    this.Result = []
  }
  #map (path, obj)
  {
    if (this.#fs.existsSync (path))
    {
      const temp = {}
      temp.name = this.#path.parse (path).name
      temp.dir = this.#path.parse (path).dir
      temp.base = this.#path.parse (path).base
      temp.root = this.#path.parse (path).root
      temp.path = path
      temp.count = this.count
      this.count ++

      if (this.#fs.statSync (temp.path).isFile ())
      {
        temp.ext = this.#path.parse (path).ext
        temp.type = "file"

        obj.push (temp)
      }
      if (this.#fs.statSync (temp.path).isDirectory ())
      {
        temp.type = "directory"
        

        if (this.#fs.readdirSync (temp.path) != "")
        {
          const contentFileNames = this.#fs.readdirSync (temp.path)
          const contentPaths = []
          temp.content = []

          for (let x in contentFileNames)
          {
            contentPaths.push (`${temp.path}/${contentFileNames[x]}`)
          }

          obj[temp.count] = temp

          for (let x in contentPaths)
          {
            this.#map (contentPaths[x], obj[temp.count].content)
          }
        }
        else
        {
          obj[temp.count] = temp
          temp.content = "Empty"
        }
      }
    }
  }
  search (searchBy, option, get)
  {
    if (searchBy == 'name')
    {
      this.#searchByName (option, this.fs, get)
    }
  }
  #searchByName (name, obj, get)
  {
    for (let x in obj)
    {
      if (obj[x].name == name)
      {
        this.#get (get, obj[x], this.result)
      }
      this.#searchByName (name, obj[x].content)
    }
  }
  #get (get, obj, result)
  {
    
  }
}
module.exports = FSM