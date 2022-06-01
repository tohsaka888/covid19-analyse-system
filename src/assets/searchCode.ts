import country from './country1.json'

export const searchCode = (name: string) => {
  let code = ''
  country.forEach(item => {
    if (item.zhName === name || item.enName === name) {
      code = item.code
    }
  })
  return code.toLowerCase()
}