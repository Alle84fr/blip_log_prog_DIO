package diferentes_class;

class FormaBolo {

    String saborMassa;
    String saborRecheio;

    // Construtor
    FormaBolo(String sabor, String recheio) {
        this.saborMassa = sabor;
        this.saborRecheio = recheio;
    }

    // Sobrecarga para recheio padrão
    FormaBolo(String sabor) {
        this(sabor, "sem recheio");
    }

    void mensagemValor() {

        double valor;

        if (saborMassa.equals("limão siciliano") && !saborRecheio.equals("sem recheio")) {
            valor = 63.00;
        } else if (saborMassa.equals("limão siciliano")) {
            valor = 54.00;
        } else if (!saborRecheio.equals("sem recheio")) {
            valor = 41.00;
        } else {
            valor = 31.20;
        }

        System.out.println("""
        ._______________________________________.
        | Bolos dona Donilde
        |.......................................|
        | Sabor: %s - %s
        |.......................................|
        | Total: R$ %.2f
        ._______________________________________.
        """.formatted(saborMassa, saborRecheio, valor));
    }
}

public class Main {
        public static void main(String[] args) {
        FormaBolo bolo = new FormaBolo("limão siciliano");
        bolo.mensagemValor();
    }
}
