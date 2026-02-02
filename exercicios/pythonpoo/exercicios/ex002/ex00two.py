class Gafanhoto: # CLASSE
    """
    Classe que representa um gafanhoto.
    Exemplo de como documentar uma classe.

    """
    def __init__(self, nome = "", idade = 0, sexo = "" ):#MÉTODO CONSTRUTOR
        #ATRIBUTOS DE INSTÂNCIA
        self.nome = nome
        self.idade = idade
        self.sexo = sexo
    #MÉTODO DE INSTÂNCIA
    def aniversario(self):
        self.idade = self.idade + 1 # ou self.idade += 1

    # def mensagem(self):
        #return f"{self.nome} é gafanhoto(a) e tem {self.idade} anos de idade e #sexo {self.sexo}."
    
    def __str__(self): # <-- Dunder str metodo especial
        return f"{self.nome} - {self.idade} - {self.sexo}"
    
    def __getstate__(self): # <-- Dunder getstate metodo especial
        return f"Estado: {self.nome} => {self.idade} => {self.sexo}"
    
    #DECLARAÇÃO DE OBJETOS
g1 = Gafanhoto(nome="Jubileu", idade=15, sexo="F")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g1.aniversario()
#print(g1.mensagem())
#print(g1.__doc__)#<-- mostra a documentação do metodo
#print(g1) #<-- mostra o nome da classe e o endereco de memoria
print(g1.__dict__)#<--(Attribute)nova saida{'nome': 'Jubileu', 'idade': 16, 'sexo': 'F'}
print(g1.__getstate__())#<--(Method) nova saida esse é um metodo especial
print(g1.__class__)

g2 = Gafanhoto(nome="Maria", idade=18, sexo="F")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g2.aniversario()
#print(g2.mensagem())
print(g2.__dict__)
print(g2.__getstate__())


g3 = Gafanhoto(nome="Viper", idade=20, sexo="M")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g3.aniversario()
#print(g3.mensagem())
print(g3.__dict__)
print(g3.__getstate__())

g4 = Gafanhoto()#()<=chamada de estanciação -> chamar um método especial metodo construtor
g4.aniversario()
#print(g4.mensagem())
print(g4.__dict__)
print(g4.__getstate__())