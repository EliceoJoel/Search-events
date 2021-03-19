class API {
   constructor(){
      this.token_auth = 'QDKDFDAUHKFV4QRNKJRC';
      this.order = 'date';
   }

   //get categories in init
   async getCategories(){
      const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`;
      const urlCategories = await fetch(url);
      const categories = await urlCategories.json();
      return categories;
   }

}