# Coroutines in Python are like generators but can also accept input

def coroutine(func):
    def wrapper(*args, **kwargs):
        c = func(*args, **kwargs)
        next(c)
        return c

    return wrapper


@coroutine
def token_issuer(tokenId=0):
    try:
        while True:
            name = yield
            tokenId += 1
            print("Issued token: {} to user: {}".format(tokenId, name))
    except GeneratorExit:
        print("Last issued token is: {}".format(tokenId))


t = token_issuer(20)
t.send("Anthony")
t.send("Bella")
t.send("Christie")
t.close()
