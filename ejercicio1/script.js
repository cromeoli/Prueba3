

/** Your class description */
class Jugador{
    constructor(nombre, apellidos, nivel = 1, puntuacion = 1, vivo = true){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = nivel;
        this.puntuacion = puntuacion;

}
/**
 * Description
 * @param {boolean} zombieEliminado
 * @returns {any}
 * */
    sumarPuntuacion(zombieEliminado){
        if(zombieEliminado){
            this.puntuacion++;
            this.comprobarPuntuacion()
     }
  }

/**
 * Description
 * @returns {any}*/
 *  comprobarPuntuacion(){
    if(this.puntuacion > 11){
        this.puntuacion = 1
        this.nivel++
    }
  }
    restarPuntuacion(jugadorAlcanzado){
        if(jugadorAlcanzado){
            this.puntuacion--;
            this.resetearPuntuacion()
        }
    }

    resetearPuntuacion(){
        if(this.puntuacion <= 0){
            this.nivel = 1;
            this.puntuacion = 1;
            alert("El jugador "+this.nombre+" ha sido reseteado.");
        }
        
    }

}

let willyrex = new Jugador("Willyrex","Zubeldia");
let paco = new Jugador("Paco","Pouso");

willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)
willyrex.sumarPuntuacion(true)

willyrex.restarPuntuacion(true)
console.log(willyrex.puntuacion)

console.log(willyrex._puntuacion);

const jugadoresTestArray = [willyrex, paco]

jugadoresTestArray.map(sumarPuntuacion(true))