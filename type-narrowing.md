# Understanding Type Narrowing in TypeScript

## Introduction

Type narrowing is one of the powerful features of the Typescript. It allows someone to shrink the type of a variable from a broader type to more specific type. This is paritcularly useful when working with multiple types or union types.There are some ways to narrow down the type, one of them is `Type Guards`. We will discuss about `Type Guards` in this article.

## What is Type Guard?

`Type Guard` is technique used to narrow down the type of variable within a conditional block. It is a way to check the type of a variable at runtime  and reduce the bugs and errors in the code early. Some of the common type guards are `typeof`, `instanceof`, `in`.

## typeof

In Typescript `typeof` checks a value's type at `runtime`.But when used in a condition, this check helps to narrow down the variable’s type at compile time. This can be particularly useful when ensuring type safety in functions and when manipulating data structures. `typeof` can check the types like `string`, `number`, `boolean`, `symbol`, `undefined`, and `object`.

#### Basic Example of typeof

```typescript
function checkType(value: string | number): void {
  if (typeof value === "string") {
    console.log("The value is a string:", value);
  } else {
    console.log("The value is a number:", value);
  }
}
```

## instanceof

The TypeScript `instanceof` operator is used to check if an object is an instance of a specific class or constructor function at runtime. When it is used in a conditional statement TypeScript narrows the type of the variable within the corresponding block.

#### Example

```typescript
class Species {
  dance() {
    console.log("Dancing");
  }
}

class Alien extends Species {
  pretendingToBeHuman() {
    console.log("i'm human");
  }
}

function checkInstance(creature: Species): void {
  if (creature instanceof Alien) {
    creature.pretendingToBeHuman(); // narrowed to Alien
  } else {
    creature.dance(); //remains as Species
  }
}
```

## in

The TypeScript `in` operator is used to check if a property exists on an object at runtime. When it is used in a conditional statement TypeScript narrows down the type accordingly.

#### Example

```typescript
type Godzilla = {
  roar: string;
  attack: string;
};
type Megalon = {
  abilities: string;
  fly: string;
};

function describeMonster(monster: Godzilla | Megalon): void {
  if ("roar" in monster) {
    console.log("This monster can roar");
  } else {
    console.log("This monster can fly");
  }
}
```

This became useful for distinuguising between object types that dont share `discriminant` property.

## summary

Type narrowing is crucial for writing type-safe code and robut code in TypeScript. By using type guards like `typeof`, `instanceof`, and `in` we can narrow down the types fo variables confidently, and prevent early bugs.It helps catch runtime errors during development and improves overall code readibility
