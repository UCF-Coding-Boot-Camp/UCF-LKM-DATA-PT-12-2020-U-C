Sub SimpleArrays():
    
    ' Basic Array Example
    ' ------------------------------------------
    ' Create the Ingredients Array
    Dim Ingredients(5) as String

    ' Add Ingredients to the Array 
    Ingredients(0) = "Chocolate Bar"
    Ingredients(1) = "Peanut Butter"
    Ingredients(2) = "Jelly"
    Ingredients(3) = "Macaroni"
    Ingredients(4) = "Potato Salad"
    Ingredients(5) = "Dragonfruit"

    ' Retrieve specific elements of the array
    MsgBox(Ingredients(4))
    MsgBox(Ingredients(0))

End Sub