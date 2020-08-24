import { Formatter, DefaultFormatter } from "./Formatter";

declare global {
  module NodeJS {
    interface Global {
      logr: { formatter: Formatter };
    }
  }
}

if (!global.logr) global.logr = { formatter: null };

export enum ConsoleLevel {
  DEBUG,
  ERROR,
  INFO,
  TRACE,
  WARN
}


export class Console {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public debug(message: string) {
    return this.log(ConsoleLevel.DEBUG, message);
  }

  public error(message: string) {
    return this.log(ConsoleLevel.ERROR, message);
  }

  public info(message: string) {
    return this.log(ConsoleLevel.INFO, message);
  }

  public trace(message: string) {
    return this.log(ConsoleLevel.TRACE, message);
  }

  public warn(message: string) {
    return this.log(ConsoleLevel.WARN, message);
  }

  public log(level: ConsoleLevel, message: string) {
    const formatter = global.logr.formatter || new DefaultFormatter();
    console.log(formatter.format(message, this.name, level, new Date()));
    return formatter.format(message, this.name, level, new Date());
  }

  public static setFormatter(formatter: Formatter) {
    global.logr.formatter = formatter;
  }
  public static logger(o: string | Function) {
    const name = o instanceof Function ? o.name : o;
    return new Console(name);
  }
}