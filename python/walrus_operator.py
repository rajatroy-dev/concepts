# walrus operator => Assign a value to a variable and return the value at the sametime

# Without walrus
x = open("./walrus_operator.txt", "r")
if x:
    print(x.read())
    x.close()


# With walrus
if y := open("./walrus_operator.txt", "r"):
    print(y.read())
    y.close()
