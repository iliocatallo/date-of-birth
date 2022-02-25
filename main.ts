import { DateOfBirth } from "./DateOfBirth";

const dob = DateOfBirth.of({ day: 29, month: 1, year: 1986 })

// This causes a compile-time error
// DateOfBirth.of({ day: 29, month: 2, year: 1986})

console.log(dob)