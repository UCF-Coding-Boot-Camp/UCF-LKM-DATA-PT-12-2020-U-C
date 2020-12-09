Sub animal_loop()

Dim i, small, large As Integer, sheet2, sheet3 As Worksheet

Set sheet1 = Worksheets("All_animals")
Set sheet2 = Worksheets("Small_animals")
Set sheet3 = Worksheets("Large_animals")

' Track animal index
small = 2
large = 2

' Loop through the range of animals
For i = 2 To 29

    If sheet1.Cells(i, 2).Value < 60 Then

        sheet2.Range("A" & small).Value = sheet1.Cells(i, 1).Value
        sheet2.Range("B" & small).Value = sheet1.Cells(i, 2).Value
        sheet2.Range("C" & small).Value = sheet1. Cells(i, 3).Value

        ' increase our index for small animals
        small = small + 1

    Else

        sheet3.Range("A" & large).Value = sheet1.Cells(i, 1).Value
        sheet3.Range("B" & large).Value = sheet1.Cells(i, 2).Value
        sheet3.Range("C" & large).Value = sheet1.Cells(i, 3).Value

        ' increase our index for large animals
        large = large + 1

    End If

Next i

End Sub
