Sub VariableSetting():

    ' Create variables for the Price, Tax, Quantity, and Total
    Dim Price As Double
    Dim Tax As Double
    Dim Quantity As Double
    Dim Total As Double

    ' Retrieve and store the data values in each variable
    Price = Range("B2").Value
    Tax = Range("C2").Value
    Quantity = Range("D2").Value

    ' Calculate the total by using each of the variables
    Total = Price * (1 + Tax) * Quantity

    ' Create a Message Box for the Total and insert into cell
    MsgBox ("Your total is $" + Str(Total))
    Range("E2").Value = Total

End Sub
