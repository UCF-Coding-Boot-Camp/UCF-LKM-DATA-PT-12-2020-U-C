# Define the function and tell it to print "Hello!" when called
def print_hello():
    print(f"Hello!")


# Call the function within the application to ensure the code is run
print_hello()
# -------------#


# Functions that take in and use parameters can also be defined
def print_name(name):
    print("Hello " + name + "!")


# When calling a function with a parameter, a parameter must be passed into the function
print_name("Bob Smith")
# -------------#

# The prime use case for functions is in being able to run the same code for different values
list_one = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list_two = [11, 12, 13, 14, 15]


def list_information(simple_list):
    print(f"The values within the list are...")
    for value in simple_list:
        print(value)
    print("The length of this list is... " + str(len(simple_list)))


list_information(list_one)
list_information(list_two)
