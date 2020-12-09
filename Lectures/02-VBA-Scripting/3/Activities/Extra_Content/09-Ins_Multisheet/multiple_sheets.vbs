Sub dimensions()

Dim sheet1, sheet2 As Worksheet, string1 As String

Set sheet1 = Worksheets("Sheet1")
Set sheet2 = Worksheets("Sheet2")

string1 = "I can go all over the place"

sheet1.Cells(1, 1).Value = string1

sheet2.Cells(1, 1).Value = string1

' What happens when we try to add to sheet we have not created yet in excel
' uncomment to find out
' Dim sheet3 As Worksheet
' Set sheet3 = Worksheets("Sheet3")

' sheet3.Cells(1, 1).Value = string1

End Sub
