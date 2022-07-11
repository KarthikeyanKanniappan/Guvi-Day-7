// 1.Class - Movie
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(arr) {
    var finalRating = arr.filter((arr) => arr.includes(this.rating));
    return finalRating;
  }
}

const Casio = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(Casio);

// 2.Circle - Class
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getCircle() {
    return this.radius;
  }
  getColor() {
    return this.color;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const newer = new Circle(1.0, "red");
console.log(newer);
console.log(newer.getArea());
console.log(newer.getCircumference());

// 3.Person Class

class person {
  constructor(name, age, gender, pursuing) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.pursuing = pursuing;
  }
}
const karthikeyan = new person("karthikeyan", 25, "male", "web development");
console.log(karthikeyan);

// 4. class to calculate the uber price
class uber {
  constructor(name, location, traveledDistance) {
    this.name = name;
    this.location = location;
    this.traveledDistance = traveledDistance;
  }
  getFair() {
    let price1km = 8;
    let fair = this.traveledDistance * price1km;
    return `Distance traveled is ${this.traveledDistance}km and fair is ${fair}rs`;
  }
}

const UberUp = new uber("kar", "london", 50);
console.log(UberUp);
console.log(UberUp.getFair());
