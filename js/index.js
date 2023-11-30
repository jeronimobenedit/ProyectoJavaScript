
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
                const infoUsuario = [NOMBRE, APELLIDO, EDAD, DNI];
                console.log ("Datos del usuario:" , infoUsuario);
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
                const planDePago = []
                for (let cuotas = 1; cuotas <= TIEMPO; cuotas++) {
                    let pago_mensual = monto_final / TIEMPO;
                    deuda = monto_final - (pago_mensual * cuotas);
                    planDePago.push({ cuota: cuotas, deudaRestante: pago_mensual.toFixed(2)});
                }
                console.log("Su plan de pago:");
                for (const cuotaInfo of planDePago) {
                    console.log(`Cuota ${cuotaInfo.cuota}: Deuda restante = ${cuotaInfo.deudaRestante}`);
                }
                }
            
                    }
        }
            }

const usuariosDeEjemplo = [
    {NOMBRE: "Juan", APELLIDO: "Lopez", EDAD: 23, DNI:42032092, DEUDA: 525000},
    {NOMBRE: "Martin", APELLIDO: "Fernandez", EDAD: 17, DNI:46032092, DEUDA: 0},
    {NOMBRE: "Marcos", APELLIDO: "Perez", EDAD: 31, DNI:36032092, DEUDA: 25000},
];
const usuariosMenoresDeEdad = usuariosDeEjemplo.filter(usuario => usuario.EDAD < 18 && usuario.DNI > 46000000);
console.log("Usuarios menores de edad, con acceso denegado:", usuariosMenoresDeEdad);

function buscarPorDeuda (deudaExcesiva){
    const usuarioEncontrado = usuariosDeEjemplo.find(usuario => usuario.DEUDA > deudaExcesiva);
    return usuarioEncontrado;
}

const deudaExcesiva = 500000;

const usuarioEncontrado = buscarPorDeuda(deudaExcesiva);

if(usuarioEncontrado) {
    console.log("Este usuario ha superado el limite del monto de deuda, por lo que no podra solicitar nuevos prestamos:", usuarioEncontrado);
} else {
    console.log("No hay usuarios con deudas que superen el limite");
}




