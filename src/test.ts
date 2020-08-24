import { Console, Formatter } from ".";
import { ConsoleLevel } from "./Console";

const s = Console.logger('MyClass');
s.debug('this is some sort of debug msg');
s.error('oops smth went rowrng');
s.info('just some info')
s.trace('trace')

class MyNewFormatter implements Formatter {
  format(message: string, origin: string, level: ConsoleLevel, time: Date): string {
    return `${message} ${origin} ${level} ${time.toLocaleString()}`;
  }

}

Console.setFormatter(new MyNewFormatter());

const d = Console.logger('EJLHJSRGHJ');
d.debug('this is some sort of debug msg');
d.error('oops smth went rowrng');
d.info('just some info')
d.trace('trace')