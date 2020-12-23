# The list of candies to print to the screen
candy_list = [
    "Snickers",
    "Kit Kat",
    "Sour Patch Kids",
    "Juicy Fruit",
    "Swedish Fish",
    "Skittles",
    "Hershey Bar",
    "Starbursts",
    "M&Ms"
]

# The amount of candy the user will be allowed to choose
allowance = 5

# The list used to store all of the candies selected inside of
candy_cart = []

# Print all of the candies to the screen and their index in brackets
for candy in candy_list:
    print(f'[{str(candy_list.index(candy))}] {candy}')

# Another option to run the for loop involves Python's enumerate method
# This method obtains both the index and the value of an item during a for loop
# for index, candy in candy_list:
#     print(index, candy)

# Run through a loop which allows the user to choose which candies to take home with them
print("Which candy would you like to bring home?")
for x in range(allowance):
    selected = input("Input the number of the candy you want: ")

    # Add the candy at the index chosen to the candy_cart list
    candy_cart.append(candy_list[int(selected)])

# Loop through the candy_cart to say what candies were brought home
print("I brought home with me...")
for candy in candy_cart:
    print(candy)
