import color from 'picocolors';
const log = console.log;
const logger = {
    log: (msg: string) => log(msg),
    info: (msg: string) => log(color.blue(msg)),
    success: (msg: string) => log(color.green(msg)),
    warn: (msg: string) => log(color.yellow(msg)),
    error: (msg: string) => log(color.red(msg)),
} as const;

export { logger };
