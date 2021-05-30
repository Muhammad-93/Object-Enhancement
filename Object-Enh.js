// Same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


//   Same keys and values ES2015

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

//   Computed Property Names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// Computed Property Names ES2015

let favoriteNumber2 = 42;

const instructor1 = {
  firstName: "Colt",
  [favoriteNumber2]: "That is my favorite!"
}


// Object Methods ES2015


const instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


  function createAnimal(species, verb, noise){
      return {
          species,
          [verb](){
              console.log(noise)
            //   return noise;
          }
      }
  }

  function createAnimal2(species, verb, noise){
    return {
        species,
    [verb]: noise
    }
}

//   let verb = "bark"

  let x = createAnimal('dog', 'bark', 'whoooo')
  x.bark();
  console.log(x)

  let y = createAnimal2('dog', 'bark', 'whoooo')
  console.log(y)

//   let verb = 'bark';