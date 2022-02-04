
    var varglobal_x, varglobal_y;
    function seleccion() {
        var signo =document.getElementById("opcion").value;
        switch(signo) {
        case "1":
            varglobal_x=60;
            varglobal_y=50;
            break;
        case "2":
            varglobal_x=40;
            varglobal_y=35;
            break;
        case "3":
            varglobal_x=20;
            varglobal_y=20;
            break;
        default:
            //alert("Seleccione una operacion")
            break;
        }
        console.log(varglobal_x, varglobal_y);
    }

    function holas() {
        console.log("holasssssssssssssss");
    }