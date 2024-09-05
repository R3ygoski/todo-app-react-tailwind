const idGenerator = (length:number):string => {
  const values:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let acc:string = "" 
  for (let i = 0; i < length; i++){
    acc += values[Math.floor(Math.random()*62)]
  }
  return acc
}

export default idGenerator