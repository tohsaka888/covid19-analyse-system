import contry from './country.json'

export const searchCode = (name: string) => {
  let code = ''
  contry.forEach(item => {
    if (item.zhName === name || item.enName === name) {
      code = item.code
    }
  })
  return code.toLowerCase()
}