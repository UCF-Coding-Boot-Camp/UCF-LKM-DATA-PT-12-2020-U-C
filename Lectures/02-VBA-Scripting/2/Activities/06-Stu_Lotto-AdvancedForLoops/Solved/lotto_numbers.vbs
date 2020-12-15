Sub lotto_winner()

    ' Create variables to hold winners. (Use "Long" because the numbers exceed the limit for integers) 
    Dim first_place As Long
    Dim second_place As Long
    Dim third_place As Long
    Dim runner1 As Long
    Dim runner2 As Long
    Dim runner3 As Long

    ' Establish the winning ticket numbers
    first_place = 3957481
    second_place = 5865187
    third_place = 2817729

    ' Establish the runner-up numbers
    runner1 = 2275339
    runner2 = 5868182
    runner3 = 1841402

    ' Loop through each of the lotto tickets
    For i = 1 To 1001

        ' Check if the lotto number matches the first place winner...
        If Cells(i, 3).Value = first_place Then

            ' If so, create a message box specifying the first place win
            MsgBox " Congratulations " + Cells(i, 1).Value

            ' Retrieve the values associated with the winner and enter them into the winner's box.
            Cells(2, 6).Value = Cells(i, 1).Value
            Cells(2, 7).Value = Cells(i, 2).Value
            Cells(2, 8).Value = first_place

        ' Check if the lotto number matches the second place winner...
        ElseIf Cells(i, 3).Value = second_place Then
            
            ' Retrieve the values associated with the winner and enter them into the winner's box.
            Cells(3, 6).Value = Cells(i, 1).Value
            Cells(3, 7).Value = Cells(i, 2).Value
            Cells(3, 8).Value = second_place

        ' Check if the lotto number matches the second place winner...
        ElseIf Cells(i, 3).Value = third_place Then
           
            ' Retrieve the values associated with the winner and enter them into the winner's box.
            Cells(4, 6).Value = Cells(i, 1).Value
            Cells(4, 7).Value = Cells(i, 2).Value
            Cells(4, 8).Value = third_place

        ' Ends this series of IF/ELSE conditionals
        End If

    Next i

    ' Loop through the lotto tickets a second time to find the first instance of a "runner-up" winner

    For i = 1 to 1001

        ' BONUS: Check for runner ups with an OR operator
        If Cells(i, 3).Value = runner1 Or Cells(i, 3).Value = runner2 Or Cells(i, 3).Value = runner3 Then
            
            ' Retrieve the values associated with the winner and enter them into the winner's box.
            runner_up = Cells(i, 3).Value
            Cells(5, 6).Value = Cells(i, 1).Value
            Cells(5, 7).Value = Cells(i, 2).Value
            Cells(5, 8).Value = runner_up

            ' If first match is found, exit the for loop
            Exit for

        End If

    Next i 

End Sub
