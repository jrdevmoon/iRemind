const Imports = (obj)=>
{
  if (obj.b_paths)
  {
    for (let x in obj.b_paths)
    {
      this[x] = require (obj.b_paths[x])
    }
  }

  return this
}

module.exports = Imports