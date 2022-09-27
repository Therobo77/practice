// import test from 'node:test';
// import test from "node:test";

import car from "../constructor.js";

test ("test constructor" ,()=>{
    expect(car).toBeDefined();
    const c = new car("X7","BMW","1.5cr","BLACK")
    expect(c).toEqual({
            name: "X7",
            brand:"BMW",
            price: "1.5cr",
            color: "BLACK"
        });
        expect(c).toBeInstanceOf(car)
});

test("run method",()=>{
    expect(car).toBeDefined();
    const c = new car("Q7","AUDI","1.5cr","BLACK");
    expect(c).toBeInstanceOf(car);
    expect(c.run()).toEqual("AUDI Q7 is running");
})

// expect to be defined