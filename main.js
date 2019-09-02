// variable de objeto vue
const app = new Vue({ 
    // elemento que une nuestra vista con nuestro objeto
    el: '#app',
    // arreglo con las variables de entrada y salida de datos que vienen desde la vista
    data: () => ({
        // iniciamos base 10 para que tome este valor por defecto que equivale a decimal
        baseSeleccionada: "10",
        // datos de salida
        binario: "",
        octal: "",
        decimal: "",
        hexadecimal: "",
        // dato de entrada
        numero: "",
        
    }),

    methods: {
        // Con esta funcion vamos a convertir un decimal a todas sus otras bases
        numeroCambiado() {
            // La funcion parseInt recibe el numero y la base como parametro.
            this.convertirDeDecimalA(parseInt(this.numero, this.baseSeleccionada));
        },
        
        // en esta funcion asignamos las bases numericas a convertir 
        convertirDeDecimalA(numero) {
            // como validacion convetimos los valores de las bases a cadenas
            if (!numero)
                return;
            this.binario = numero.toString("2");
            this.octal = numero.toString("8");
            this.decimal = numero.toString("10");
            this.hexadecimal = numero.toString("16");
        },
 
    },
   // este atributo de vue, permite ejecutar acciones sindeclarar eventos por lo que nos ayuda a mostrar los valores rapidamente
    watch: {
        // Si elegimos otra base esta funcion ejecuta la conversion a todas las otras bases
        baseSeleccionada() {
            this.numeroCambiado();
        },
        // esta funcion ejecuta automaticamente la conversion de cada numero ingresado
        numero() {
            this.numeroCambiado();
        }
    }
});