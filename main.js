  let span = document.querySelector('.price span');
  let valu = document.getElementById('inp');


  
  function val(e){
      let mat = Math.abs(e.target.value * 15.99);
      span.innerHTML= '$' + mat;      
  }

  valu.addEventListener('change',val)
  

  


  

