//Sasso Carta e Forbice tra due giocatori CPU

//creo il gioco
function gioco() {
  //creo array per tracciare posizione elementi
  var array=['sasso', 'carta', 'forbice'];
  //console.log(array);
  //tiro random cpu1 (richiamo array)
  var cpu1=array[Math.floor(Math.random()*array.length)]; //<--- generare casualmente elementi contenuti nell'array
  console.log(cpu1);
  document.writeln('<br />CPU 1 '+cpu1); //<--- appare in html
  //tiro random cpu2 (richiamo array)
  var cpu2=array[Math.floor(Math.random()*array.length)];
  console.log(cpu2);
  document.writeln('<br />CPU 2 '+cpu2); //<--- appare in html

  //LOGICA CON IF
  if ((cpu1=='sasso'&&cpu2=='sasso')||(cpu1=='forbice'&&cpu2=='forbice')||(cpu1=='carta'&&cpu2=='carta')) {
    alert('pareggio');
    //document.writeln('pareggio');
  }else if ((cpu1=='sasso'&&cpu2=='forbice')||(cpu1=='carta'&&cpu2=='sasso')||(cpu1=='forbice'&&cpu2=='carta')){
    alert('vince cpu1');
    //document.writeln('pareggio');
  }else{
    alert('vince cpu2');
    //document.writeln('pareggio');
  }

}
