# Unlike lists, dictionaries store information in pairs
# ---------------------------------------------------------------

# Create a dictionary to hold the actor's names.
actors = {}

# Create a dictionary using the built-in function.
actors = dict()

# A dictionary of an actor.
actors = {"name": "Tom Cruise"}
print(f'{actors["name"]}')

# Add an actor to the dictionary with the key "name"
# and the value "Denzel Washington".
actors["name"] = "Denzel Washington"

# Print the actors dictionary.
print(actors)

# Print only the actor.
print(f'{actors["name"]}')

# A list of actors
actors_list = [
    "Tom Cruise",
    "Angelina Jolie",
    "Kristen Stewart",
    "Denzel Washington"]

# Overwrite the value, "Denzel Washington", with the list of actors.
actors["name"] = actors_list

# Print the first actor
print(f'{actors["name"][0]}')

# ---------------------------------------------------------------

# A dictionary can contain multiple pairs of information
actress = {
    "name": "Angelina Jolie",
    "genre": "Action",
    "nationality": "United States"
}

# ---------------------------------------------------------------

# A dictionary can contain multiple types of information
another_actor = {
    "name": "Sylvester Stallone",
    "age": 62,
    "married": True,
    "best movies": [
        "Rocky",
        "Rocky 2",
        "Rocky 3"]}
print(f'{another_actor["name"]} was in {another_actor["best movies"][0]}')
# ---------------------------------------------------------------

# A dictionary can even contain another dictionary
film = {
    "title": "Interstellar",
    "revenues": {
        "United States": 360,
        "China": 250,
        "United Kingdom": 73
    }
}
print(f'{film["title"]} made {film["revenues"]["United States"]}'" million dollars in the US.")
# ---------------------------------------------------------------
