
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

    def mensagem(self):
        return f"{self.nome} é gafanhoto(a) e tem {self.idade} anos de idade e sexo {self.sexo}."
    
    #DECLARAÇÃO DE OBJETOS
g1 = Gafanhoto(nome="Jubileu", idade=15, sexo="F")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g1.aniversario()
#print(g1.mensagem())
#print(g1.__doc__)#<-- mostra a documentação do método
print(g1) #<-- mostra o nome da classe e o endereço de memória

g2 = Gafanhoto(nome="Maria", idade=18, sexo="F")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g2.aniversario()
print(g2.mensagem())

g3 = Gafanhoto(nome="Viper", idade=20, sexo="M")#()<=chamada de estanciação -> chamar um método especial metodo construtor
g3.aniversario()
print(g3.mensagem())

g4 = Gafanhoto()#()<=chamada de estanciação -> chamar um método especial metodo construtor
g4.aniversario()
print(g4.mensagem())