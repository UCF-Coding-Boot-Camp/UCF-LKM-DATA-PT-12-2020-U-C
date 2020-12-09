Sub population():

Dim total As Long, i As Integer, per_change As Single, pop1, pop2 As Long
Dim sheet1, sheet2, sheet3 As Worksheet

Set sheet1 = Worksheets("Census_2000")
Set sheet2 = Worksheets("Projected_2030")
Set sheet3 = Worksheets("Summary")

total = 0

For i = 2 To 52

    ' states
    sheet3.Cells(i, 1).Value = sheet1.Cells(i, 1).Value

    'populations
    pop1 = sheet1.Cells(i, 2).Value
    pop2 = sheet2.Cells(i, 2).Value

    sheet3.Cells(i, 2).Value = pop1
    sheet3.Cells(i, 3).Value = pop2
    
    per_change = ((pop2 - pop1) / pop1) * 100
    sheet3.Cells(i, 4).Value = per_change

    If per_change > 0 Then
        
        sheet3.Cells(i, 4).Interior.ColorIndex = 33
    Else
        sheet3.Cells(i, 4).Interior.ColorIndex = 36
    
    End If
   
Next i

End Sub
