import time
start_time = time.time()
########################################################


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
    def sayName(self):
      print(f"Hello, my name is {self.name}")

champion = User("Alex", "alex@gmail.com")

champion.sayName()


########################################################
print("--- %s seconds 10000 runs---" %
      f"{((time.time() - start_time) * 10000):.3f}")
