Sub credit_card()

  ' Set an initial variable for holding the brand name
  Dim Brand_Name As String

  ' Set an initial variable for holding the total per credit card brand
  Dim Brand_Total As Double
  Brand_Total = 0

  ' Keep track of the location for each credit card brand in the summary table
  Dim Summary_Table_Row As Integer
  Summary_Table_Row = 2

  ' Loop through all credit card purchases
  For i = 2 To 101

    ' Check if we are still within the same credit card brand, if it is not...
    If Cells(i + 1, 1).Value <> Cells(i, 1).Value Then

      ' Set the Brand name
      Brand_Name = Cells(i, 1).Value

      ' Add to the Brand Total
      Brand_Total = Brand_Total + Cells(i, 3).Value

      ' Print the Credit Card Brand in the Summary Table
      Range("G" & Summary_Table_Row).Value = Brand_Name

      ' Print the Brand Amount to the Summary Table
      Range("H" & Summary_Table_Row).Value = Brand_Total

      ' Add one to the summary table row
      Summary_Table_Row = Summary_Table_Row + 1
      
      ' Reset the Brand Total
      Brand_Total = 0

    ' If the cell immediately following a row is the same brand...
    Else

      ' Add to the Brand Total
      Brand_Total = Brand_Total + Cells(i, 3).Value

    End If

  Next i

End Sub
