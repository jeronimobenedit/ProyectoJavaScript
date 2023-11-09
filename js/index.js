
const NOMBRE= prompt("ingrese su nombre: ");
console.log(NOMBRE)
const APELLIDO= prompt("ingrese su apellido: ");
console.log(APELLIDO)
const interes_corto_plazo = 0.12;
const interes_largo_plazo = 0.18;
let monto_final;
let deuda;

const EDAD= prompt("ingrese su edad: ");
if(EDAD < 18 ){
    console.log("este sitio no es apto para menores de edad");}
    else{ 
        console.log(EDAD)
        const DNI= prompt("ingrese su dni: ");
        if(DNI>46000000){
            console.log("este sitio no es apto para menores de edad");}
            else{
                console.log(DNI)
                const VALOR_PRESTAMO = parseFloat(prompt(" ingrese el monto en pesos del prestamo que desea obtener: "))
        if(VALOR_PRESTAMO > 2000000 ){
            console.log("lamento informarle que ese monto supera el limite de 2000000 que tenemos para otorgar los prestamos");
        }else{
            console.log(VALOR_PRESTAMO)
            const TIEMPO = parseFloat(prompt("¿en cuantos meses desea pagar su prestamo?"))
            console.log(TIEMPO)
            if(TIEMPO >= 24) {
            let monto_final = VALOR_PRESTAMO + (VALOR_PRESTAMO * interes_largo_plazo);
            console.log("se aplicara una tasa de intres del 18 por ciento, cumplido el plazo del prestamo usted tendra que devolver un monto total de" + " " + monto_final)
            }else{
                 monto_final = VALOR_PRESTAMO + (VALOR_PRESTAMO * interes_corto_plazo);
                console.log("se aplicara una tasa de intres del 12 por ciento, cumplido el plazo del prestamo usted tendra que devolver un monto total de" + " " + monto_final)
            }
            const respuesta_plan_de_pago =  prompt("¿desea un plan de pago en cuotas para su prestamo? (si/no): ");
            if (respuesta_plan_de_pago === "no") {
                console.log("Usted deberá pagar la suma total de " + monto_final + " cumplido el plazo de " + TIEMPO + " meses");
            } else {
                for (let cuotas = 1, deuda = monto_final; cuotas <= TIEMPO; cuotas++) {
                    let pago_mensual = deuda / cuotas;
                    console.log(`Cuota ${cuotas}: Deuda restante = ${pago_mensual.toFixed(2)}`);
                }
                }
            
                    }
        }
            }




