
#DECLARAÇÃO DE CLASSES

class Gafanhoto: # CLASSE
    def __init__(self):#MÉTODO CONSTRUTOR
        #ATRIBUTOS DE INSTÂNCIA
        self.nome = ""
        self.idade = 0
        self.sexo = ""
    #MÉTODO DE INSTÂNCIA
    def aniversario(self):
        self.idade = self.idade + 1 # ou self.idade += 1

    def mensagem(self):
        return f"{self.nome} é gafanhoto(a) e tem {self.idade} anos de idade e sexo {self.sexo}."
    
    #DECLARAÇÃO DE OBJETOS
g1 = Gafanhoto()#()<=chamada de estanciação -> chamar um método especial metodo construtor
g1.nome = "Jubileu"
g1.sexo = "F"
g1.idade = 15
g1.aniversario()

print(g1.mensagem())
    