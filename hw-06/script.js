const car = {
    brand: "BMW",
    model: "5 Series",
    year: 2019,
    getDescription() {
        return `${this.brand} ${this.model}, выпущен в ${this.year} году.`;
    },
};

console.log(car.getDescription());
