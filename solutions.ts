export function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined && multiplier !== null) {
    return value * multiplier;
  }
  return value * 2;
}

export function processInput(
  value: string | number | boolean,
): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) return "Active";
    return "Inactive";
  }
}

export function formatCoordinate(
  tuple: readonly [number, number, string],
): string {
  return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
}

export function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(
  courses: Course[],
  minStudent: number,
): Course[] {
  return courses.filter(
    (item) => item.students >= minStudent && item.isPublished === true,
  );
}

export function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  let newArray: T[typeof key][] = [];

  for (const item of items) {
    newArray.push(item[key]);
  }
  return newArray;
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

export async function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000),
    );
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
}
