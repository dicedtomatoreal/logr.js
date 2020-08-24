# logr.js

Simple logging for simple people. View documentation at [here](https://dicedtomatoreal.github.com/logr.js)

# usage
```ts
import { Console } from "logr.js";

class MyClass {  }

const s = Console.logger('MyClass');
// or
const s = Console.logger(MyClass);
s.debug('this is some sort of debug msg');
s.error('oops smth went rowrng');
s.info('just some info')
s.trace('trace')
s.warn('a warning?')
```