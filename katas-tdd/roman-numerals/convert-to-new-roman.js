function convertToNewRoman(n) {
    if(n===0) {
            return ""
    }   else if(n>=1000) {
                return "M" + convertToNewRoman(n - 1000)
        }   else if(n>=900) {
                    return "CM" + convertToNewRoman(n - 900)
            }   else if(n>=500) {
                        return "D" + convertToNewRoman(n - 500)
                }   else if(n>=400) {
                            return "CD" + convertToNewRoman(n - 400)
                    }   else if(n>=100) {
                                return "C" + convertToNewRoman(n - 100)
                        }   else if(n>=90) {
                                return "XC" + convertToNewRoman(n - 90)
                            }   else if(n >= 40){
                                    return "XL" + convertToNewRoman(n - 40)
                                }   else if(n >= 10){
                                        return "X" + convertToNewRoman(n - 10)
                                    }   else if(n >= 9){
                                        return "IX" + convertToNewRoman(n - 9)
                                        }   else if(n >= 5){
                                                return "V" + convertToNewRoman(n - 5)
                                            }   else if(n >= 4){
                                                    return "IV" + convertToNewRoman(n - 4)
                                                }   else if(n >= 1){
                                                        return "I" + convertToNewRoman(n - 1)
                                                    }
}

module.exports = convertToNewRoman;
