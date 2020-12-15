Sub NextCells()

  ' Set a variable for specifying the column of interest
  Dim column As Integer
  column = 1

  ' Loop through rows in the column
  For i = 2 To 6

    ' Searches for when the value of the next cell is different than that of the current cell
    If Cells(i + 1, column).Value <> Cells(i, column).Value Then

      ' Message Box the value of the current cell and value of the next cell
      MsgBox (Cells(i, column).Value & " and then " & Cells(i + 1, column).Value)

    End If

  Next i

End Sub
