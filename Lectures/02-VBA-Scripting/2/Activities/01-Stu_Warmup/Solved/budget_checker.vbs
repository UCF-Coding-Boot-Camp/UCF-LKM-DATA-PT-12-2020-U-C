' Part I: Calculate the total after fees
' Part II: Create an alert if the item is above budget after fees.
' Part III: If the item is above budget, correct the price such that it would be "under budget"

' ----------------------------------------------------

Sub BudgetChecker()

    ' Part I
    ' ----------------------------------------------------

    ' 1. Retrieve the Price and Fees from the cells
    Dim total As Double

    ' 2. Use these values to calculate the total
    total = Range("F3").Value * (1 + Range("H3").Value)
    ' msgbox(total)

    ' 3. Enter the total into the appropriate cell
    Range("L3").Value = total

    ' Part II
    ' ----------------------------------------------------
    ' 4. Create a variable to store budget
    Dim budget As Double
    budget = Range("B3").Value
    ' MsgBox(budget)

    ' 5. Compare using conditionals whether total is greater than or less than the budget
    If budget > total Then

        MsgBox ("Under budget")

    Else

        MsgBox ("Over budget")

        ' Part III
        ' ----------------------------------------------------
        Dim newPrice As Double
        newPrice = budget / (1 + Range("H3").Value)

        'Use a worksheet function to round the new price down to the nearest whole dollar
        newPrice = Application.WorksheetFunction.RoundDown(newPrice, 0)

        ' Change the price
        Range("F3").Value = newPrice

        ' Change the new total
        Range("L3").Value = newPrice * (1 + Range("H3").Value)

    End If


End Sub
