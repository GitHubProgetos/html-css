
class ContaBancaria:
    """
    Cria uma conta bancária e permite fazer saques e depósitos
    """

    def __init__(self, id, nome, saldo=0):
        self.id = id
        self.titular = nome
        self.saldo = saldo


c1 = ContaBancaria(id=112, nome="Gustavo", saldo=3000)
print(c1)