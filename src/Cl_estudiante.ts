export default class Cl_estudiante{
    private _cedula:string ="";
    private _notaF:number = 0;

    constructor(cedula:string, notaF:number){
        this.cedula = cedula;
        this.notaF= notaF;
    }

    set cedula(cedula:string){
        this._cedula = cedula;
    }

    get cedula():string{
        return this._cedula
    }

    set notaF(notaF:number){
        this._notaF = +notaF;
    }
    get notaF():number{
        return this._notaF;
    }

}
