' Part I: Count the number of Hornets Found
' Part II: Each time you find Hornets replace them with Bugs
' Part III: You have a max amount of Bees and Hornets, utilize no more than what's provided.
'           If there are still hornets left, provide the user with a message stating: "Oh no! We still have hornets..."

Sub HornetsNest()

  ' PART III
  ' ------------------------------------------------
  ' Create a variable to hold the number of hornets
  Dim HornetsCount As Integer

  ' Create a variable to hold the number of bugs and bees
  Dim BugsCount As Integer
  Dim BeesCount As Integer

  ' Set the value of Bugs and Bees counters
  BugsCount = Range("L2").Value
  BeesCount = Range("R2").Value

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

        ' Check if we have bugs available
        If (BugsCount > 0) Then

          ' Replace the Hornets with Bugs
          Cells(i, j).Value = "Bugs"

          ' Subtract from the Bugs Count
          BugsCount = BugsCount - 1

        ' Check if we have bees available
        ElseIf (BeesCount > 0) Then

          ' Replace the Hornets with Bees
          Cells(i, j).Value = "Bees"

          ' Subtract from the Bees Count
          BeesCount = BeesCount - 1

        End If

      End If

    Next j

  Next i

  ' Show the number of hornets found
  MsgBox (HornetsCount & " Hornets Found")

  ' Create the final message if we still have hornets
  If (Range("L2").Value + Range("R2").Value < HornetsCount) Then

    MsgBox ("Oh no! We still have hornets... ")

  End If

End Sub
