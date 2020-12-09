# -*- coding: UTF-8 -*-
"""UUID Generator.

This module allows us to generate a universally unique identifier (UUID)
with a custom length and character set.

Example:
    $ python uuid.py

"""

# Use import to access code from other modules.
import string
import random


# Use default parameters in our function declaration to allow us to change the length and characters
def generate_uuid(length=4, characters=string.ascii_letters + string.digits):
    """Generate a string of random characters.

    Args:
        length (int, optional): The length of the UUID to generate.
        characters (string, optional): The character set used to build the UUID.

    Returns:
        string: A string representation of the generated UUID.
    """
    # Loop through a range defined by the length size
    # In each loop, make a random choice from our characters and append that to the uuid list
    uuid = []
    for _ in range(length):
        uuid.append(random.choice(characters))
    # Use join to convert the uuid list to a string
    return ''.join(uuid)


def test():
    """Run test code."""

    # Generate a uuid using default values
    uuid = generate_uuid()
    print("UUID using default values: {}".format(uuid))

    # Generate a uuid of length 16 using the default character set
    uuid16 = generate_uuid(length=16)
    print("UUID of length 16: {}".format(uuid16))

    # Generate a uuid of random numbers using the default length
    uuid_random_numbers = generate_uuid(characters=string.digits)
    print("UUID of only numbers: {}".format(uuid_random_numbers))

    # Generate a uuid consisting of only letters
    uuid_random_letters = generate_uuid(characters=string.ascii_letters)
    print("UUID of only letters: {}".format(uuid_random_letters))

    # Generate a uuid of length 8 that includes punctuation in the character set
    uuid_with_punctuation = generate_uuid(
        length=8,
        characters=string.ascii_letters + string.digits + string.punctuation)
    print("UUID with punctuation: {}".format(uuid_with_punctuation))


# This conditional will execute the test function when running as a script.
# https://docs.python.org/3/library/__main__.html
if __name__ == '__main__':
    test()
