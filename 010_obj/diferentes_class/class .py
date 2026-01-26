class FormaBolo:

    def __init__(self, sabor, recheio="sem recheio"):
        self.sabor_massa = sabor
        self.sabor_recheio = recheio

    def mensagem_valor(self):

        if self.sabor_massa == "limão siciliano" and self.sabor_recheio != "sem recheio":
            valor = 63.00
        elif self.sabor_massa == "limão siciliano":
            valor = 54.00
        elif self.sabor_recheio != "sem recheio":
            valor = 41.00
        else:
            valor = 31.20

        print(f"""
._______________________________________.
| Bolos dona Donilde
|.......................................|
| Sabor: {self.sabor_massa} - {self.sabor_recheio}
|.......................................|
| Total: R$ {valor}
._______________________________________.
""")


bolo = FormaBolo("limão siciliano")
bolo.mensagem_valor()
