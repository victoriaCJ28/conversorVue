// variable de objeto vue
const app = new Vue({ 
    // elemento que une nuestra vista con nuestro objeto
    el: '#app',
    // arreglo con las variables de entrada y salida de datos que vienen desde la vista
    data: () => ({
        // iniciamos base 10 para que tome este valor por defecto que equivale a decimal
        baseSeleccionada: 10,
        // datos de salida
        binario: "",
        octal: "",
        decimal: "",
        hexadecimal: "",
        // dato de entrada
        numero: "",
        
    }),

    methods: {
        numeroCambiado() {
            this.convertirDeDecimalA(parseInt(this.numero, this.baseSeleccionada));
        },
        
        convertirDeDecimalA(numero) {
            if (!numero)
                return;
            this.binario = numero.toString("2");
            this.octal = numero.toString("8");
            this.decimal = numero.toString("10");
            this.hexadecimal = numero.toString("16");
        },
       
       
     
    },
   
    watch: {
        baseSeleccionada() {
            this.numeroCambiado();
        },
        numero() {
            this.numeroCambiado();
        }
    }
});