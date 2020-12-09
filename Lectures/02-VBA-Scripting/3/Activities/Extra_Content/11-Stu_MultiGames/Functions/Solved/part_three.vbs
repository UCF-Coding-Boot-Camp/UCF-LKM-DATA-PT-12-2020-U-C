Sub population():

Dim l, total As Long, i As Integer
Dim sheet1, sheet2, sheet3 As Worksheet

Set sheet1 = Worksheets("Census_2000")
Set sheet2 = Worksheets("Projected_2030")
Set sheet3 = Worksheets("Summary")

total_2000 = 0
total_2030 = 0

For i = 2 To 52

    ' states 
    sheet3.Cells(i,1).Value = sheet1.Cells(i,1).Value

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


    perchange = 0

    ' yearly totals
        total_2000 = total_2000 + sheet1.Cells(i, 2).Value
        total_2030 = total_2030 + sheet2.Cells(i, 2).Value
    
    Next i

' Largest population 2000
max_num1 = WorksheetFunction.Max(sheet3.Range("B2:B52"))
max_state1 = WorksheetFunction.Match(max_num1, sheet3.Range("B2:B52"), 0)
sheet3.Cells(4, 9).Value = sheet3.Cells(max_state1 + 1, 1)
sheet3.Cells(4, 10).Value = max_num1

'Largest population 2030
max_num2 = WorksheetFunction.Max(sheet3.Range("C3:B52"))
max_state2 = WorksheetFunction.Match(max_num2, sheet3.Range("C2:C52"), 0)
sheet3.Cells(10, 9).Value = sheet3.Cells(max_state2 + 1, 1)
sheet3.Cells(10, 10).Value = max_num2

' Low population 2000
low_number1 = WorksheetFunction.Min(Range("B2:B52"))
low_state1 = WorksheetFunction.Match(low_number1, Range("B2:B52"), 0)
sheet3.Cells(5, 9).Value = sheet1.Cells(low_state1 + 1, 1)
sheet3.Cells(5, 10).Value = low_number1

' Low population 20
low_number2 = WorksheetFunction.Min(Range("C2:C52"))
low_state2 = WorksheetFunction.Match(low_number2, Range("C2:C52"), 0)
sheet3.Cells(11, 9).Value = sheet1.Cells(low_state2 + 1, 1)
sheet3.Cells(11, 10).Value = low_number2

' Total population
sheet3.Cells(6, 10).Value = total_2000
sheet3.Cells(12, 10).Value = total_2030

End Sub
