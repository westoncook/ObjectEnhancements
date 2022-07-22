const createInstructor = (first, last) => ({first,last})

const instructor = {
    firstName : "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye(){
        return `${this.firstName} says, "Bye!"`
    }
}

const createAnimal = (animal, vocalization, sound) => ({
    animal,
    [vocalization](){
        console.log(sound);
    }
})

const dog = createAnimal("dog", 'bark', 'woof')