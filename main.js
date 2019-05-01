//Sasso Carta e Forbice tra due giocatori CPU

//creo il gioco
function gioco() {
  //creo array per tracciare posizione elementi
  var array=['sasso', 'carta', 'forbice'];
  //tiro random cpu1 (richiamo array)
  var cpu1=array[Math.floor(Math.random()*array.length)]; //<--- generare casualmente elementi contenuti nell'array
  console.log(cpu1);
  document.getElementById('cpu1').innerHTML='<br />CPU 1 '+cpu1; 
  //tiro random cpu2 (richiamo array)
  var cpu2=array[Math.floor(Math.random()*array.length)];
  console.log(cpu2);
  document.getElementById('cpu2').innerHTML='<br />CPU 2 '+cpu2;
  //LOGICA CON IF
  if (cpu1==cpu2){
    document.getElementById('verdetto').innerHTML='<br /> PAREGGIO';
  }else if ((cpu1=='sasso'&&cpu2=='forbice')||(cpu1=='carta'&&cpu2=='sasso')||(cpu1=='forbice'&&cpu2=='carta')){
    document.getElementById('verdetto').innerHTML='<br /> VINCE CPU1';
  }else{
    document.getElementById('verdetto').innerHTML='<br /> VINCE CPU2';
  }
}
