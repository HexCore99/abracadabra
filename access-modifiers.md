# TypeScript Access Modifier

## Introduction

In Typescript access modifiers are used to control the visibility of the class members outside the defining class. The class members are properties and methods. The access modifiers are `public` `private` and `protected`.
Let's understand each of the access modifiers in details.

## Public Access Modifier

A public access modifier defines a class member to be `public`. It is the default access modifier, meaning it is optional to use `public` keyword. A public key member can be access from the inside and outside of the class.

#### Example

```typescript
class Student {
  age: number = 0;
  constructor(public name: string) {}
  getDetails(): string {
    return `Student: ${this.name}, Age: ${this.age}`;
  }
}

const student = new Student("HExCR");
student.name = "HExEN";
student.age = 21;
student.getDetails();
```

In the above example, `name` have explicit modifier `public` but `age` and `getDetails` dont have explicit modifier. But all of them can be accessed from outside the class. Which means `public` is the default access modifier.

## Private Access Modifier

A `private` access modifier put restriction to the class member. A private member can't be directly accessed outside the class not even from the `child` class. It can only be accessed from inside the class.

```typescript
class Student {
  private marks: number = 85;

  getMarks(): number {
    return this.marks; // Allowed
  }
}

class GraduateStudent extends Student {
  showMarks(): void {
    console.log(this.marks); // Error: marks is private to Student
  }
}

const student = new GraduateStudent();

console.log(student.getMarks()); // prints 85
console.log(student.marks); // Error: private property
```

## Protected Access Modifier

A `protected` access modifier in Typescript allows a class member to be accessed from inside the class and from the `child` class. It can't be accessed from outside the class.

```typescript
class Monster {
  protected power: number = 83;
}

class Viper extends Monster {
  tripleSpearStab(): void {
    console.log(`Triple Spear Stab deals ${this.power * 3} damage!`);
  }
}

const viper = new Viper();
viper.tripleSpearStab(); // prints Triple Spear Stab deals 249 damage!
console.log(viper.power); // Error: power is protected
```

## readonly 
 
A `readonly` modifier in Typescript allows to set teh value only once. It can be set either at the time of declaration or in the constructor. After initialization, it can't be modified.

### Example

```typescript
class Monster {
  readonly name: string;

  constructor(name: string) {
    this.name = name; // Allowed
  }
}

const monster = new Monster("Godzilla");

console.log(monster.name); // "Godzilla"
monster.name = "Megalon";  // TypeScript error: name is readonly
```

## Summary

Access modifiers in TypeScript are mainly used for `encapsulation` and to control the visibility of class members. The  modifiers are:

- `public`: Members are accessible from anywhere. This is the default access level.
- `private`: Members are only accessible within the class.
- `protected`: Members are only accessible within the class and its subclasses.
- `readonly`: Properties can only be assigned once, either at the time of declaration or in the constructor.