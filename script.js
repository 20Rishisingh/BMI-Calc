const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
   e.preventDefault();

   const ht = document.getElementById("height").value;
   const wt = document.getElementById("weight").value;
   const result = document.getElementById("result");

   if((ht === '') || (ht < 0)){
      result.innerHTML = `Please enter valid height`;
   }
   else if((wt === ' ') || (wt < 0)){
      result.innerHTML = `Please enter valid weight`;
   }
   else if((ht == 0) && (wt == 0)){
      alert("Please enter height and weight");
   }
   else{
      const BMI = (wt / ((ht * ht) / 10000)).toFixed(2); 
      result.innerHTML = `<span> ${BMI} </span>`;
   }

});
