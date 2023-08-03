function add(numbers){
    const numberArray = numbers.split(",")

    const parsedNumvers =numberArray.map((num)=> parseFloat(num))

    const sum = parsedNumvers.reduce((a, b) => a+b)

    return sum
}
