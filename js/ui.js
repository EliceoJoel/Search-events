class UI {
   constructor(){
      this.init();
      //read result
      this.list = document.getElementById('events');
   }

   init(){
      this.printCategories();
   }

   printCategories(){
      api.getCategories()
         .then(categories=>{
            const listCategories = document.getElementById("category");
            categories.categories.forEach(category => {
               let option = document.createElement('option');
               option.value = category.id;
               option.textContent = category.name;
               listCategories.appendChild(option);
            });
         })
         .catch(error=>{
            alert("error, reload page")
         })
   }

   showErrorMessage(){
      const message = document.createElement('p');
      message.classList.add('error-message');
      message.textContent = "Fill in the fields"
      document.getElementById('form').insertAdjacentElement("afterbegin", message);
      setTimeout(() => {
         document.querySelector(".error-message").remove();
      }, 2000);
   }

   showSpinner(){
      const spinner = document.querySelector('.sk-circle');
      spinner.style.display = "block";
      setTimeout(() => {
         spinner.style.display = "none";
         this.showEvents();
      }, 3000);
   }

   showEvents(){
      const events = document.getElementById('events');
      events.style.display = "grid";
   }
}