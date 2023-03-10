import { Day } from './Day'
import { Month } from './Month'
import { IsLeapYear, Year } from './Year'

export class DateOfBirth {
  private constructor(private readonly date: Date) {}

  static of<Y extends Year>({ day, month, year }: DayMonthYear<Y>): DateOfBirth  {
    const date = new Date(year, month, day)
    return new DateOfBirth(date)
  }
}

type DayMonthYear<Y extends Year> =
  | { day: DaysOfFebruary<Y>, month: 2, year: Y }
  | { day: Exclude<Day, 31>, month: 4 | 6 | 9 | 11, year: Y }
  | { day: Day, month: Exclude<Month, 2 | 4 | 6 | 9 | 11>, year: Y }

type DaysOfFebruary<Y extends Year> = IsLeapYear<Y> extends true
  ? Exclude<Day, 30 | 31>
  : Exclude<Day, 29 | 30 | 31>
