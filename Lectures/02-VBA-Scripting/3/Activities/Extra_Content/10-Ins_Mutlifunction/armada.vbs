Sub Armada()

Dim avg_soldiers, men_max, men_min, match_gun As Integer
Dim sheet1, sheet2 As Worksheet

Set sheet1 = Worksheets("Sheet1")
Set sheet2 = Worksheets("BreakDown")

' average function for our soldiers field
' Print Average amount of soldiers on "BreakDown" sheet
avg_soldiers = WorksheetFunction.Average(sheet1.Range("D2:D11"))
sheet2.Cells(1, 1).Value = "Average amount of soldiers"
sheet2.Cells(2, 1).Value = avg_soldiers

' Max amount of men
men_max = WorksheetFunction.Max(sheet1.Range("F2:F11"))
sheet2.Cells(1, 2).Value = "The max amount of men to one Armada"
sheet2.Cells(2, 2).Value = men_max

' Find the Row number of the Armada with 415 gunpowder
match_gun = WorksheetFunction.Match(415, sheet1.Range("I2:I11"), 0)
sheet2.Cells(1, 2).Value = "Armada with 415 gunpowder"
sheet2.Cells(2, 3).Value = match_gun

' Match up the Armada with the row number returned
' Note that Match function doesn't count headers, so an adjustment is needed
sheet2.Cells(2, 3).Value = sheet1.Cells(match_gun + 1, 1)

End Sub
