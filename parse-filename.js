/*
  @params
  - fullName: any filename with extension, no path
  return
  - object {
      name: the file name
      extension: the file extension
    }

*/

const parseFileName = (fullName) => {
  const lastDot = fullName.lastIndexOf('.')
  const len = fullName.length
  const name = fullName.slice(0, lastDot)
  const extension = fullName.slice(lastDot, len)
  return { name, extension}
}

const ret = parseFileName('bla.bla.jpg')
console.log('returned value:', ret)