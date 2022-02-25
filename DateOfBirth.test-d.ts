import { expectType, expectError } from 'tsd'
import { DateOfBirth } from './DateOfBirth'

expectError(DateOfBirth.of({ day: 29, month: 2, year: 1986}))
expectType<DateOfBirth>(DateOfBirth.of({ day: 28, month: 2, year: 1986}))