// Creo la clase speaker y le añado las propiedades
function Speaker(name) {
    this.name = name;
    this.status = false;
    this.volume = 0;

    // Creo los metodos, que son las funciones asociada a la clase,
    // y que dara funcionalidad (idelamente siempre sea 1)  al speaker

    // Speaker.prototype.getState = function () {
    //     if (this.status) {
    //         return "encendido";
    //     } else {
    //         return "apagado";
    //     }
    // }

    Speaker.prototype.setState =  function (state){
        this.status =  state;
    }

    Speaker.prototype.turnOn = function () {
        this.status = true;
        this.volume = 20;
    }

    Speaker.prototype.turnOff = function () {
        this.status = false;
        this.volume = 0;
    }

    Speaker.prototype.getVolume = function () {
        return this.volume;
    }

    Speaker.prototype.increaseVolume = function () {
        if (this.volume < 100) {
            this.volume++;
        }
    }

    Speaker.prototype.decreaseVolume = function () {
        if (this.volume > 0) {
            this.volume--;
        }
    }
    // Los SET siempre tiene que recibir un valor dentro de la funcion
    Speaker.prototype.setVolume = function (volume) {
        if (this.status) {
            if (volume > 100){//si el user introduce un valor mayor al max
                this.volume = 100;
            }
            if (volume <= 100 && volume >= 0) {
                this.volume = volume;
            }
        }
    }

    Speaker.prototype.Mute = function () {
        this.volume = 0;
    }

    //comprobar si sale correctamente el estado
    Speaker.prototype.print = function () {
        let text  = "apagado";
        if (this.status){
            text = "encencido";
        }
        console.log("El altavoz " + this.name + " está " + text + " y su volumen es de " + this.volume)
    }


    //metodo para copiar un altavoz
    Speaker.prototype.copy = function(){
        let copy = new Speaker();
        copy.setState(this.status);
        copy.setVolume(this.volume);

        return copy;
    }















}