function simularPrestamo() {
    const NOMBRE = document.getElementById("nombre").value;
    const APELLIDO = document.getElementById("apellido").value;
    const EDAD = document.getElementById("edad").value;

    if (EDAD < 18) {
        alert("este sitio no es apto para menores de edad");
        } else { 
            const DNI = document.getElementById("dni").value;
            if(DNI>46000000){
                alert("este sitio no es apto para menores de edad");
            } else {
                const infoUsuario = [NOMBRE, APELLIDO, EDAD, DNI];
                alert(`Datos del usuario: ${infoUsuario}`);
                const VALOR_PRESTAMO = parseFloat(document.getElementById("valorPrestamo").value);
                const TIEMPO = parseFloat(document.getElementById("tiempodePago").value);
                let monto_final = 0;
                if (TIEMPO >= 24) {
                    monto_final = VALOR_PRESTAMO + (VALOR_PRESTAMO * 0.18);
                    alert(`Se aplicará una tasa de interés del 18%. Cumplido el plazo del préstamo, deberá devolver un monto total de ${monto_final}`);
                } else {
                    monto_final = VALOR_PRESTAMO + (VALOR_PRESTAMO * 0.12);
                    alert(`Se aplicará una tasa de interés del 12%. Cumplido el plazo del préstamo, deberá devolver un monto total de ${monto_final}`);
                    const respuesta_plan_de_pago = document.getElementById("plandePago").value;
                    if (respuesta_plan_de_pago.toLowerCase() === "si") {
                        const pago_mensual = monto_final / TIEMPO;
                        const planDePago = [];
                        for (let cuotas = 1; cuotas <= TIEMPO; cuotas++) {
                            let deuda = monto_final - (pago_mensual * cuotas);
                            planDePago.push({ cuota: cuotas, deudaRestante: deuda.toFixed(2)});
                        }
                        let planDesglosado = "Su plan de pago:\n";
                        for (const cuotaInfo of planDePago) {
                            planDesglosado += `Cuota ${cuotaInfo.cuota}: Deuda restante = ${cuotaInfo.deudaRestante}\n`;
                        }
                        alert(planDesglosado);
                    } else {
                        alert(`Usted deberá pagar la suma totl de ${monto_final} cumplido el plazo de ${TIEMPO} meses`);
                    }
                }    
                const datosUsuario = {
                    nombre: NOMBRE,
                    apellido: APELLIDO,
                    edad: EDAD,
                    dni: DNI,
                    valorPrestamo: VALOR_PRESTAMO,
                    tiempoPago: TIEMPO,
                    planPago: respuesta_plan_de_pago,
                };
                const datosGuardados = JSON.parse(localStorage.getItem("datosUsuarios")) || [];
                datosGuardados.push(datosUsuario);
                localStorage.setItem("datosUsuarios", JSON.stringify(datosGuardados));
                alert("Datos guardados corretamente");
            }
        }
    }
    document.getElementById("botonCalcularPrestamo").addEventListener("click", simularPrestamo);

