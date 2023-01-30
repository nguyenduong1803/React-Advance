const _omit = <T>(key: [keyof T], object: T) => {
  if (typeof object === 'object') {
    const result = Object.fromEntries(
      Object.entries(object as object).filter(([k]) => {
        console.log(k)
        return !key.includes(k as keyof T)
      })
    )
    console.log(result)
    return result
  }
}
export default _omit
