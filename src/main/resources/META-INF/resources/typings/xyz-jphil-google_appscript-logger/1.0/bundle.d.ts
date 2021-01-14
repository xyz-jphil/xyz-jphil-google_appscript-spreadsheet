/**
 *
 * @author
 * @class
 */
declare class DefaultJavaLoggerService implements GlobalLoggerServiceProvider {
    /**
     *
     * @param {*} tp
     */
    log(tp: any): void;
    constructor();
}
/**
 *
 * @author
 * @class
 */
interface GlobalLoggerServiceProvider {
    log(tp: any): any;
}
/**
 *
 * @author
 * @class
 */
declare class Logger {
    static SERVICE: GlobalLoggerServiceProvider;
    static SERVICE_$LI$(): GlobalLoggerServiceProvider;
    static log(tp: any): void;
}
