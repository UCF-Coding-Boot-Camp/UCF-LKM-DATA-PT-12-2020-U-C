Sub cereal_loop()

Dim i, total As Integer
Dim sheet1, sheet2 As Worksheet

Set sheet1 = Worksheets("Sheet1")
Set sheet2 = Worksheets("Sheet2")

sheet2.Cells(1,1).Value = "Brand Names"
sheet2.Cells(1, 3).Value = "Average Calories"

For i = 2 To 66
    sheet2.Range("A" & i).Value = sheet1.Cells(i, 1).Value
    total = total + Cells(i, 3).Value
Next i

sheet2.Cells(2, 3).Value = total / 65
    

End Sub
