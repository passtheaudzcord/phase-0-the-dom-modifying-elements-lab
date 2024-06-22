// Write your code here!


  //removeAttribute('id');
  //body.removeChild('id');

  const element = document.getElementById("main");
  element.remove();

  const newHeader = document.createElement('h1');
  newHeader.id = 'victory';

  newHeader.textContent = "AUDREY is the champion";