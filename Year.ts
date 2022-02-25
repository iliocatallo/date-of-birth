export type Year = number

export type IsLeapYear<Y extends Year> = _IsLeapYear<NumberToString<Y>>

type _IsLeapYear<Y extends string> = IsInteger<Y> extends true
  ? IsMultipleOf400<Y> extends true
    ? true
    : And<Not<IsMultipleOf100<Y>>, IsMultipleOf4<Y>> extends true
      ? true
      : false
  : false

type NumberToString<T extends number> = `${T}`

type IsInteger<S extends string> = S extends `${any}.${any}` ? false : true

type IsMultipleOf4<S extends string> = S extends `${any}${'00'|'04'|'08'|'12'|'16'|'20'|'24'|'28'|'32'|'36'|'40'|'44'|'48'|'52'|'56'|'60'|'64'|'68'|'72'|'76'|'80'|'84'|'88'|'92'|'96'}`
  ? true
  : false

type IsMultipleOf400<S extends string> = S extends `${any}${'0000'|'0400'|'0800'|'1200'|'1600'|'2000'|'2400'|'2800'|'3200'|'3600'|'4000'|'4400'|'4800'|'5200'|'5600'|'6000'|'6400'|'6800'|'7200'|'7600'|'8000'|'8400'|'8800'|'9200'|'9600'}`
? true
: false

type IsMultipleOf100<S extends string> = S extends `${any}${'00'}`
? true
: false

type Not<B extends boolean> = B extends true ? false : true

type And<B1 extends boolean, B2 extends boolean> = B1 extends true ? B2 : false