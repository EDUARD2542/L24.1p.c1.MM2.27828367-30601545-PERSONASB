export default class Cl_general{
    constructor(){
        this.acumEdad=0;
        this.contPersonas = 0;
        this.edadMayor = 0;
    }

    procesarPersona(per){
        this.contPersonas++
        this.acumEdad += per.edad
        if(per.edad > this.edadMayor && per.sexo=="mujer"){
            this.edadMayor = per.edad
        }
    }

    promedioEdad(){
        return this.acumEdad / this.contPersonas
    }
    devolveredadMayor(){
        return this.edadMayor

    }

}