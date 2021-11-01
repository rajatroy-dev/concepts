class ContextManager:
    def __init__(self, entryValue="Start", exitValue="Exit") -> None:
        self.entryValue = entryValue
        self.exitValue = exitValue

    def __enter__(self):
        print("Value at entry: {}".format(self.entryValue))

    def __exit__(self, exc_type, exc_value, exc_traceback):
        print("Value at exit: {}".format(self.exitValue))


with ContextManager("A", "Z"):
    print("Inside a context")
