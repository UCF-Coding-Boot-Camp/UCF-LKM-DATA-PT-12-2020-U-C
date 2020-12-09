Sub VariableSetting():

    ' Create variables for the Price, Tax, Quantity, and Total
    ' <YOUR CODE GOES HERE>




    ' Retrieve and store the data values in each variable
    ' <YOUR CODE GOES HERE>




    ' Calculate the total by using each of the variables 
    Total = Price * (1 + Tax) * Quantity

    ' Create a Message Box for the Total and insert into cell
    MsgBox("Your total is $" + str(Total))
    Range("E2").value = Total

End Sub