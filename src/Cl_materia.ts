import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_materia{
    private cntAprobados:number;
    private cntReprobados:number;
    private cntEstudiantes:number;
    private acNotas:number;

constructor(){
    this.cntAprobados = 0;
    this.cntReprobados = 0;
    this.cntEstudiantes = 0;
    this.acNotas = 0.0;
}

procesarEstudiante(es:Cl_estudiante): void{
    if (es.notaF >= 48) {
        this.cntAprobados++
    }else{
        this.cntReprobados++
    }

    this.cntEstudiantes++

    this.acNotas += es.notaF
}

totalAprobados(): number{
    return this.cntAprobados;

}
totalReprobados(): number{
    return this.cntReprobados;
}

promedioSeccion():number{
    if (this.cntEstudiantes > 0) {
        return this.acNotas / this.cntEstudiantes
    }else return 0
}

}