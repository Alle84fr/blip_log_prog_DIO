## switch

<spin style="color: #a60d39;">Java</spin>

String fruta = "banana";


switch (fruta) {

    case "banana":
    case "morango":
        System.out.println("Vitamina");
        break;

    case "maçã":
        System.out.println("açaí com maçã");
        break;

    default:
        System.out.println("Fruta padrão");
}

<spin style="color: #a60d39;">Python</spin>

String fruta = "banana";


match fruta:

    case "banana" | "morango":
        print("Vitamina")

    case "maçã":
        print("açaí com maçã")

    case _:
        print("Fruta padrão")