Sub SentenceBreaker()

    ' Retrieve the user sentence and store in variable
    Dim Sentence As String
    Sentence = Cells(1, 2).Value
    MsgBox (Sentence)

    ' Retrieve the user word numbers and store in variables
    Dim num1 As Integer
    Dim num2 As Integer
    Dim num3 As Integer

    num1 = Cells(4, 1).Value
    num2 = Cells(5, 1).Value
    num3 = Cells(6, 1).Value

    MsgBox (num1)
    MsgBox (num2)
    MsgBox (num3)

    ' Split the user's sentence into words
    Dim SentenceArray() As String
    SentenceArray = Split(Sentence, " ")

    ' Use the word numbers to retrieve the specific words in the sentence
    ' Remember to offset by the 0 index
    Cells(4, 2).Value = SentenceArray(num1 - 1)
    Cells(5, 2).Value = SentenceArray(num2 - 1)
    Cells(6, 2).Value = SentenceArray(num3 - 1)
    

End Sub
