' Steps:
' ----------------------------------------------------------------------------

' Part I:

' 1. Extract words before the phrase "_Wells_Fargo" to figure out which State.
' 2. Add the State to the first column of each spreadsheet.
' 3. Convert the headers of each row to simply say the year.
' 4. Convert the cells to currency format

Sub WellsFargo_PtI()

    ' --------------------------------------------
    ' LOOP THROUGH ALL SHEETS
    ' --------------------------------------------
    For Each ws in Worksheets

        ' --------------------------------------------
        ' INSERT THE STATE
        ' --------------------------------------------

        ' Created a Variable to Hold File Name, Last Row, Last Column, and Year
        Dim WorksheetName As String

        ' Determine the Last Row
        LastRow = ws.Cells(Rows.Count, 1).End(xlUp).Row

        ' Grabbed the WorksheetName
        WorksheetName = ws.Name
        ' MsgBox WorksheetName

        ' Split the WorksheetName
        State = Split(WorksheetName, "_")
        ' MsgBox State(0)

        ' Add the State to the Column
        ws.Range("A1").EntireColumn.Insert

        ' Add the word State to the First Column Header
        ws.Cells(1, 1).Value = "State"

        ' Add the State to all rows
        ws.Range("A2:A" & LastRow) = State(0)

        ' --------------------------------------------
        ' CORRECT THE YEAR NUMBERS
        ' --------------------------------------------

        ' Determine the Last Column Number
        LastColumn = ws.Cells(1, Columns.Count).End(xlToLeft).Column

        ' Rename the Year columns by looping through and renaming each
        For i = 3 To LastColumn
            YearHeader = ws.Cells(1, i).Value
            YearSplit = Split(YearHeader, " ")
            ' MsgBox YearSplit(0)
            ws.Cells(1, i).Value = YearSplit(3)
            ' MsgBox Cells(1, i)
            ' MsgBox YearSplit(3)

        Next i

        ' --------------------------------------------
        ' CORRECT THE CURRENCY FORMAT
        ' --------------------------------------------

        ' Add the currency
        For i = 2 To LastRow

            For j = 3 To LastColumn

                ws.Cells(i, j).Style = "Currency"

            Next j

        Next i

    ' --------------------------------------------
    ' FIXES COMPLETE
    ' --------------------------------------------
    Next ws

    MsgBox ("Fixes Complete")


End Sub
