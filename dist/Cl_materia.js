export default class Cl_materia {
    constructor() {
        this.cntAprobados = 0;
        this.cntReprobados = 0;
        this.cntEstudiantes = 0;
        this.acNotas = 0.0;
    }
    procesarEstudiante(es) {
        if (es.notaF >= 48) {
            this.cntAprobados++;
        }
        else {
            this.cntReprobados++;
        }
        this.cntEstudiantes++;
        this.acNotas += es.notaF;
    }
    totalAprobados() {
        return this.cntAprobados;
    }
    totalReprobados() {
        return this.cntReprobados;
    }
    promedioSeccion() {
        if (this.cntEstudiantes > 0) {
            return this.acNotas / this.cntEstudiantes;
        }
        else
            return 0;
    }
}
