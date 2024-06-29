function calculationRectangleArea(){
  const B =getInput('Rectangle-base');
  const C = getInput('Rectangle-height');

  const area = B+C;
  console.log(area);

const hello = setInput('Rectangle-area',area);

}

function getInput(inputbc){
    const inputd = document.getElementById(inputbc);
    const change = parseFloat(inputd.value);
    return change;
}

function setInput(element,area){
    const rect = document.getElementById(element);
     rect.innerText = area; 
}