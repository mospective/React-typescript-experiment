import React from 'react'

export default function Interface() {

    interface Person {
        name: string,
        age: number,
    }

    interface Trade extends Person {
        job: string
    }

    const person: Trade = {
        name: "max",
        age: 29,
        job: "developer"
    }

    console.log(person);

    interface Animal {
        name: string
    }

    interface Animal {
        scientificName: string
    }

    interface Herbivore extends Animal {
        consumePlant(plant: string): string
    }

    class Cow implements Herbivore {
        name = "cow";
        scientificName = "Bos taurus";
        consumePlant = (plant: string) => {
            return `${plant} waste`
        }
    }

    const cow = new Cow();
    cow.consumePlant("grass");

    console.log(cow);

    

  return (
    <div>
        <h2>Interface</h2>
        <p>{cow.scientificName}</p>
    </div>
  )
}
