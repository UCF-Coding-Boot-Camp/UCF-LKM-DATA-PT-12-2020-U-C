' Part I: Count the number of Hornets Found
' Part II: Each time you find Hornets replace them with Bugs
' Part III: You have a max amount of Bees and Hornets, utilize no more than what's provided.
'           If there are still hornets left, provide the user with a message stating: "Oh no! We still have hornets..."

Sub HornetsNest()

  ' PART II
  ' ------------------------------------------------
  ' Create a variable to hold the number of hornets
  Dim HornetsCount As Integer

  ' Set the initial value for the HornetsCount to 0
  HornetsCount = 0

  ' Loop through all rows
  For i = 1 To 6

    ' Loop through all columns
    For j = 1 To 7

      ' If the value of a cell is equal to Hornets
      If Cells(i, j).Value = "Hornets" Then

        ' Add to the HornetsCounter
        HornetsCount = HornetsCount + 1

        ' Replace the Hornets with Bugs
        Cells(i, j).Value = "Bugs"

      End If

    Next j

  Next i

  ' Show the number of hornets found
  MsgBox(HornetsCount & " Hornets Found")

End Sub
