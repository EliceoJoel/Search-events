const api = new API();
const ui = new UI();

//read data of form
document.getElementById('btn-submit').addEventListener('click', (e)=>{
   e.preventDefault();
   const eventName = document.getElementById('event-name').value;
   const categorySelected = document.getElementById('category').value;
   if(eventName !== "" && categorySelected !== ""){
      ui.showSpinner();
   }else{
      ui.showErrorMessage();
   }
})