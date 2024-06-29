function calculationRhombusArea(){
    const M = naeem('Rhombus-base');
    const N = naeem('Rhombus-height');

    const areaRom= 0.5*M*N;
    console.log(areaRom);
    const final = naeemvai('Rhombus-area',areaRom);
}

function naeem(elements){
    const rom= document.getElementById(elements);
    const value = parseFloat(rom.value);
    return value;
}

function naeemvai(rom,area){
    const setRom = document.getElementById(rom);
    setRom.innerText = area;
}
