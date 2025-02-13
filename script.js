class Animal {
	 constructor(species) {
        this.species = species;  
    }
	get species (){
		return this._species
	}
	set species(value) {
        this._species = value; 
    }
	makeSound(){
		console.log(`The ${this.species} makes a sound`)
	}
}
// let ani=new Animal('spacime')
// console.log(ani.makeSound())

class Dog extends Animal {
    constructor(species) {
        super(species)
    }
    bark(){
        console.log('woof')
    }
}
// let myDog=new Dog('golden Retriver')
// myDog.makeSound()

class Cat extends Animal {
    constructor(species) {
        super(species)
    }
    purr(){
        console.log('purr')
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
