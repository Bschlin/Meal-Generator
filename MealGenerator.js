const menu = {
  _courses: { appetizers: [], mains: [], desserts: [] },

  get appetizers() {
    return this._appetizers;
  },
  set appetizers(appetizersIn) {
    this._appetizers = appetizersIn;
  },

  get mains() {
    return this._mains;
  },

  set mains(mainsIn) {
    this._mains = mainsIn;
  },

  get desserts() {
    return this._desserts;
  },

  set desserts(dessertsIn) {
    this._desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse: function(courseName) {
    let dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal: function() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${
      dessert.name
    }. The price is $${totalPrice.toFixed(2)}.`;
  }
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Greek Salad", 5.25);
menu.addDishToCourse("appetizers", "Tomato Soup", 3.0);
menu.addDishToCourse("appetizers", "Crab Cakes", 7.25);

menu.addDishToCourse("mains", "Ahi Tuna Steak", 20.25);
menu.addDishToCourse("mains", "Sushi", 17.25);
menu.addDishToCourse("mains", "Grecian Chicken", 15.3);
menu.addDishToCourse("mains", "Lobster Banh Mi", 18.75);

menu.addDishToCourse("desserts", "Bundt Cake", 3.55);
menu.addDishToCourse("desserts", "Ice Cream Float", 4.75);
menu.addDishToCourse("desserts", "Mousse Cake", 4.5);
menu.addDishToCourse("desserts", "Banana Split", 3.75);

let meal = menu.generateRandomMeal();
console.log(meal);
