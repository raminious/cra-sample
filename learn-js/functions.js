function multiplier(number) {

  const fn = (value) => {
    return number * value
  }

  return fn
}


const a = multiplier(5)
const result = a(10)

console.log(result)