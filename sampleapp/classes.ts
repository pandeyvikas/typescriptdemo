/*****************************
class Person {
    name: string | undefined;
}

const person=new Person();
person.name="Jane";

console.log(person.name);
//********************************/

/*********************/
class Person2 {
    private name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

let person2 = new Person2("Mohan");
console.log(person2.getName());
//person2.name; //error
//*******************************/
interface Shape {
    getarea(width: number, height: number): number;
}


class Rectangle implements Shape {
    width: number;
    height: number;

    public constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

    }
    getarea(width: number, height: number): number {
        return width * height;
    }
}


class square extends Rectangle {
    getarea(width: number, height: number): number {
        super(width * width);
    }
}
}