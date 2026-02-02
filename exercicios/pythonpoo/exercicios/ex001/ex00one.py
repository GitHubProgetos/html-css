
#DECLARAÇÃO DE CLASSES
## Toda essa area é o molde a classe
class students:
    def __init__(self):#MÉTODO CONSTRUTOR
        #ATRIBUTOS DE INSTÂNCIA
        self.name = ""
        self.age = 0
        self.classe = 0
        self.notice = 0
        self.activestudent = ""
        
        #MÉTODOS DE INSTÂNCIA
    def birthday(self):# aniversário => birthday
        self.age += 1

    def message(self): # self => é um atributo generico
        return f"{self.name} is {self.age} years old and is in class {self.classe} and has {self.notice} notices and is {self.activestudent}."
    # => is => tem | years old  and is in class => anos de idade e está na turma |
    # => and has => e tem | notices and is => aviso
##
    #DECLARAÇÃO DE OBJETOS

g1 = students()#()<=chamada de estanciação -> chamar um método especial metodo construtor
g1.name = "Jubileu"
g1.age = 15
g1.classe = 1
g1.notice = 20 # <= ATRIBUTO DE INSTÂNCIA
g1.birthday()  # <= MÉTODO DE INSTÂNCIA 
g1.activestudent = "active"

print(g1.message())

g2 = students()#()<=chamada de estanciação -> chamar um método especial metodo construtor
g2.name = "Maria"
g2.age = 18
g2.classe = 2
g2.notice = 10 # <= ATRIBUTO DE INSTÂNCIA
g2.birthday()  # <= MÉTODO DE INSTÂNCIA 
g2.activestudent = "active"

print(g2.message())

# => self => é ele mesmo
# => self => é um nome generico de um atributo de instancia
# => self => nome generico dos objetos g1 e g2