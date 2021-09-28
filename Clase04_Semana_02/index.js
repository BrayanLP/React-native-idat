let fishs = ['angel', 'clown', 'trumpet']

let printFish = fishs.map((fish) =>{
  console.log(fish)
})

printFish

// Fitler
let seaCreatures = ['whale', 'octopus', 'squid', 'starfish']

let filterSeaCreatures = seaCreatures.filter((creature )=> creature[0] === 's')

console.log('filterSeaCreatures ==>', filterSeaCreatures)

// Reduce 
let numbers = [10, 12,34,67]
let sum = numbers.reduce((acc , curr) =>{
  return acc + curr
})

console.log('sum ==>', sum)

// inCLUDE
 
