//OKgenerar un número aleatorio del 1 al 3
//OKcapturar el input del numero del usuario 
//OKpresentar una cuenta atrás de 5 segundos. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos.OK 
//OKcompara el número aleatorio con el número introducido por el usuario. 
//OKMostrar mensaje "¡Has salvado el mundo!" o "La bomba ha estallado". 
//OKImprimir el núemro elegido y junto con el número correcto (el generado aleatoriamente). 
//OK No se sabrá que número es hasta que pasen 5 segundos.

let countdowDiv = document.getElementById("countdown");
let resultDiv = document.getElementById("result")
let restartBtn = document.getElementById("restart")

let numberUser = document.getElementById("userInput");
numberUser.addEventListener ("input", (e) => {
  console.log("este es el número", e.target.value)
  numberUser = e.target.value
  })

let numberPc = randomNumber(1,4);
console.log(numberUser);
console.log(numberPc);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let timer = [1000,2000,3000,4000,5000];
  let cuentaAtrás = timer.length;

  const cuentaPromesa = new Promise ((resolve) =>{
    if (numberUser!==0){
      timer.forEach((second, index)=>{      
        setTimeout(()=>{
          cuentaAtrás --; 
          countdowDiv.innerText = `Cuenta atrás: ${cuentaAtrás} segundos`
         
          if (cuentaAtrás ===0){
            resolve(cuentaAtrás)
          }
          console.log(cuentaAtrás)
        },second);
      })
    }  
  });

  
  cuentaPromesa.then((cuentaAtrás)=>{
    if (numberUser === numberPc){
      resultDiv.innerHTML =
      `<p>Enhorabuena, has salvado el mundo</p>
      <p>Tu número ${numberUser} es el mismo que el número ${numberPc} </p>`
     }else{
      resultDiv.innerHTML = 
      `<p>La bomba ha estallado</p>
      <p>Tu número ${numberUser} no es el mismo que el número ${numberPc} </p>`
     }
  }); 


  const reset = () =>{
    cuentaAtrás; 
    countdowDiv.textContent = ""
    resultDiv.textContent = ""; 
  }
  restartBtn.addEventListener("click",reset);
  
  reset(); 
 
    
 






