function calculationTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const base = parseFloat(triangleBaseInput.value)
    console.log(base);

    const triangleHeightInput = document.getElementById("triangle-height");
    const height = parseFloat(triangleHeightInput.value);
    console.log(height);
    
    const cal = 0.5*base*height;
    console.log(cal);
    
    const area = document.getElementById("values");
    const li = document.createElement('li');
    li.innerText = cal;
    area.appendChild(li);
   
    const span = document.getElementById('triangle-area');
    span.innerText = cal;
    

}