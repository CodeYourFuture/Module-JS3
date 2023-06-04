function convertToOldRoman(n) {
  let simbol = "I"
  let simbolV = "V"
  let simbolX = "X"
  let simbolL = "L"
  let simbolC = "C"
  let simbolD = "D"
  let simbolM = "M"
    if (n > 1000){
        return simbolM + convertToOldRoman(n - 1000)
    }   else if(n === 1000){
            return simbolM
        }   else if (n>500){
                return simbolD + convertToOldRoman(n - 500)
            }   else if(n === 500){
                    return simbolD
                }   else if(n>100){
                        return simbolC + convertToOldRoman(n - 100)
                    }   else if(n === 100){
                            return simbolC
                        }   else if(n>50) {
                                return simbolL + convertToOldRoman(n - 50)
                            }   else if(n === 50){
                                    return simbolL
                                }   else if(n>10 && n<50){
                                        return simbolX + convertToOldRoman(n - 10)
                                    }   else if(n===10){
                                        return simbolX
                                        }   else if(n>5 && n<10){
                                                return simbolV + convertToOldRoman(n - 5)
                                            }   else if(n ===5){
                                                    return "V"
                                                }   else if(n >0 && n<5){
                                                        n = simbol.repeat(n)
                                                        return n
                                                    }
}

module.exports = convertToOldRoman;


