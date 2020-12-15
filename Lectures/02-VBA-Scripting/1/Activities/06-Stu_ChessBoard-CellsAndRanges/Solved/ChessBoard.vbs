Sub ChessBoard()

  ' Using Ranges
  ' ---------------------------------------

  ' Insert Pawns
  Range("A2:H2").value = "Pawn"

  ' Insert Rooks
  Range("A1, H1").value = "Rook"

  ' Insert Knights
  Range("B1, G1").value = "Knight"

  ' Insert Bishops
  Range("C1, F1").value = "Bishop"

  ' Insert Queen
  Range("D1").value = "Queen"

  ' Insert King
  Range("E1").value = "King"

  ' Using Cells
  ' ---------------------------------------

  ' Insert Pawns
  Cells(7, 1).value = "Pawn"
  Cells(7, 2).value = "Pawn"
  Cells(7, 3).value = "Pawn"
  Cells(7, 4).value = "Pawn"
  Cells(7, 5).value = "Pawn"
  Cells(7, 6).value = "Pawn"
  Cells(7, 7).value = "Pawn"
  Cells(7, 8).value = "Pawn"

  ' Insert Rooks
  Cells(8, 1).value = "Rook"
  Cells(8, 8).value = "Rook"

  ' Insert Knights
  Cells(8, 2).value = "Knight"
  Cells(8, 7).value = "Knight"

  ' Insert Bishops
  Cells(8, 3).value = "Bishop"
  Cells(8, 6).value = "Bishop"

  ' Insert Queen
  Cells(8, 4).value = "Queen"

  ' Insert King
  Cells(8, 5).value = "King"

  ' Setting cell color formatting
  ' ---------------------------------------
  For i = 1 To 8
    For j = 1 To 8
        If i Mod 2 = 0 Then
            If j Mod 2 <> 0 Then
                Cells(i, j).Interior.ColorIndex = 1
            End If
        Else
            If j Mod 2 = 0 Then
            Cells(i, j).Interior.ColorIndex = 1
            End If
        End If
    Next j
  Next i

  ' Setting text color
  ' ---------------------------------------
  Range("a1:h2").Font.ColorIndex = 3
  Range("a1:h2").Font.Bold = True

  Range("a7:h8").Font.ColorIndex = 5
  Range("a7:h8").Font.Bold = True

  ' Setting cell height and width
  ' ---------------------------------------
  Range("a1:h8").RowHeight = 60
  Range("a1:h8").ColumnWidth = 20

End Sub
