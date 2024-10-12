//Funciones de utilidad
function shuffleArray(array){
    let currentIndex = array.length;

    //mientras queden elemento para mezcla...
    while (currentIndex != 0) {

    //toma un elemento que sobrante
        let randomIndex = Math.floor(Math.random()*
        currentIndex);
        currentIndex--;

        //y cambialas con el elemento actual
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
}

export {shuffleArray};