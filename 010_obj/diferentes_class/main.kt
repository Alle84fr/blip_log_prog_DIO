class FormaBolo(
    val saborMassa: String,
    val saborRecheio: String = "sem recheio"
) {

    fun mensagemValor() {

        val valor: Double =
            if (saborMassa == "limão siciliano" && saborRecheio != "sem recheio") {
                63.00
            } else if (saborMassa == "limão siciliano") {
                54.00
            } else if (saborRecheio != "sem recheio") {
                41.00
            } else {
                31.20
            }

        println("""
        ._______________________________________.
        | Bolos dona Donilde
        |.......................................|
        | Sabor: $saborMassa - $saborRecheio
        |.......................................|
        | Total: R$ $valor
        ._______________________________________.
        """.trimIndent())
    }
}

fun main() {
    val bolo = FormaBolo("limão siciliano")
    bolo.mensagemValor()
}
