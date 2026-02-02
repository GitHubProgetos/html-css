
class ContaBancaria:
    """
    Cria uma conta bancária e permite fazer saques e depósitos

    """
    def __init__(self, id, nome, saldo=0):
        self.id = id
        self.titular = nome
        self.saldo = saldo
        print(f"Conta bancária N° {self.id} criada com sucesso! Titular: {self.titular}. Saldo: R${self.saldo:,.2f}")

    def __str__(self):
        return f"A conta n° {self.id} do titular {self.titular} tem o saldo: R${self.saldo:,.2f}"
    
    def depositar(self, valor):
        self.saldo = self.saldo + valor
        #self.saldo += valor
        print(f"Depósito de R${valor:,.2f} realizado com sucesso na conta N° {self.id}.")

    def sacar(self, valor):
        if valor > self.saldo:
            print(f"Saldo insuficiente para saque! Saque de R${valor:,.2f} negado. Saldo: R${self.saldo:,.2f} saque negado.")
        else:    
            self.saldo = self.saldo - valor
            #self.saldo -= valor
            print(f"Saque de R${valor:,.2f} realizado com sucesso na conta {self.id}.")

c1 = ContaBancaria(id=112, nome="Gustavo", saldo=3000)
c1.depositar(500)
c1.sacar(2_000_000)
print(c1)
#print(c1.__doc__)
