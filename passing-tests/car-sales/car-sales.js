
function sales(carsSold) {
    let total = {}
    let sumFord = 0 
    let sumHonda = 0
    let sumLandRover =0
    let sumToyota =0
    carsSold.forEach((car)=>{
        if (car.make === "Ford"){
           sumFord = sumFord + car.price 
        }
        total.Ford = sumFord
        if (car.make === "Honda"){
            sumHonda = sumHonda+ car.price 
        }
        total.Honda = sumHonda
        if (car.make === "Land Rover"){
            sumLandRover = sumLandRover+ car.price 
        }
        total["Land Rover"] = sumLandRover
        if (car.make === "Toyota"){
            sumToyota = sumToyota + car.price 
        }
        total.Toyota = sumToyota
    })
        return total

}



module.exports = sales;
