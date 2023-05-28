FUNCTION convertToNewRoman(number)
    DECLARE romanNumerals as Object with mapping of Roman numerals and their respective values

    DECLARE result as empty string

    FOR EACH numeral in romanNumerals
        WHILE number is greater than or equal to the value of numeral
            APPEND numeral to result
            SUBTRACT the value of numeral from number

    RETURN result
END FUNCTION

TEST CASES for convertToNewRoman:
    TEST CASE 1:
        INPUT: 1
        EXPECTED: "I"
        CALL convertToNewRoman(1)
        ASSERT result is equal to expected

    TEST CASE 2:
        INPUT: 4
        EXPECTED: "IV"
        CALL convertToNewRoman(4)
        ASSERT result is equal to expected

    TEST CASE 3:
        INPUT: 5
        EXPECTED: "V"
        CALL convertToNewRoman(5)
        ASSERT result is equal to expected

    TEST CASE 4:
        INPUT: 9
        EXPECTED: "IX"
        CALL convertToNewRoman(9)
        ASSERT result is equal to expected

    TEST CASE 5:
        INPUT: 10
        EXPECTED: "X"
        CALL convertToNewRoman(10)
        ASSERT result is equal to expected

    TEST CASE 6:
        INPUT: 40
        EXPECTED: "XL"
        CALL convertToNewRoman(40)
        ASSERT result is equal to expected

    TEST CASE 7:
        INPUT: 50
        EXPECTED: "L"
        CALL convertToNewRoman(50)
        ASSERT result is equal to expected

    TEST CASE 8:
        INPUT: 90
        EXPECTED: "XC"
        CALL convertToNewRoman(90)
        ASSERT result is equal to expected

    TEST CASE 9:
        INPUT: 100
        EXPECTED: "C"
        CALL convertToNewRoman(100)
        ASSERT result is equal to expected

    TEST CASE 10:
        INPUT: 400
        EXPECTED: "CD"
        CALL convertToNewRoman(400)
        ASSERT result is equal to expected

    TEST CASE 11:
        INPUT: 500
        EXPECTED: "D"
        CALL convertToNewRoman(500)
        ASSERT result is equal to expected

    TEST CASE 12:
        INPUT: 900
        EXPECTED: "CM"
        CALL convertToNewRoman(900)
        ASSERT result is equal to expected

    TEST CASE 13:
        INPUT: 1000
        EXPECTED: "M"
        CALL convertToNewRoman(1000)
        ASSERT result is equal to expected
The pseudo code outlines the structure of the convertToNewRoman function and the test cases to be executed. It demonstrates how to call the function with different inputs and asserts the expected result against the actual result.