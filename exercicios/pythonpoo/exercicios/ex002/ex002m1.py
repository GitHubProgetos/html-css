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
#print(g1.mensagem())#<-- printa a mensagem
#print(g1.__doc__)#<-- mostra a documentação do metodo
#print(g1) #<-- mostra o nome da classe e o endereco de memoria
#print(g1.__dict__)#<--(Attribute){'nome': 'Jubileu', 'idade': 16, 'sexo': 'F'}
#print(g1.__getstate__())#<--(Method){'nome': 'Jubileu', 'idade': 16, 'sexo': 'F'}
print(g1.__class__)#<--saída <class '__main__.Gafanhoto'>

