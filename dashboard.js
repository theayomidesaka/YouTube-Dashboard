//Function to calculate total student's attendance in a class
function totalAttendance(){
    let Aisha = 5
    let Tola = 10
    let Ebube = 8
    let Rachel = 4
    let Michael =`7`
    Michael = Number(Michael)

    let totalAttendance = Aisha + Tola + Ebube + Rachel + Michael
    console.log(totalAttendance)

}



//Function to calculate average student's attendance in a class
function averageAttendance(){
    let Aisha = prompt(`Enter Aisha's attendance`)
    Aisha = Number(Aisha)
    let Tola = prompt(`Enter Tola's attendance`)
    Tola = Number(Tola)
    let Ebube = prompt(`Enter Ebube's attendance`)
    Ebube = Number(Ebube)
    let Rachel = prompt(`Enter Rachel's attendance`)
    Rachel = Number(Rachel)
    let Michael = prompt(`Enter Michael's attendance`)
    Michael = Number(Michael)

    let averageAttendance = (Aisha + Tola + Ebube + Rachel + Michael)/5
    Math.ceil(averageAttendance)

    console.log(averageAttendance)
}

//Functions using return statement
function averageIncome(){
    let firstIncome = 10
    let secondIncome = 20
    let thirdIncome = 10

    let average = (firstIncome + secondIncome + thirdIncome) / 3

    return average
}

// console.log(averageIncome())

//Object Literals: Property of an object

let myLaptop = {
    product : `Macbook`,
    model : `Macbook Pro`,
    yearOfProduction : `2023`,
    screenSize : `16 inches`,
    color : `Grey`,
    ramSize : `16GB`,
    storageSize : `512GB`,
    display : `Retina`,
    camera : true,
    charger : true,
    purchaseAmount : 2500000,
    accessoriesCost : 34000,
    logisticCost : 10500,
}

let totalCost = myLaptop.purchaseAmount + myLaptop.accessoriesCost + myLaptop.logisticCost

console.log(totalCost)
