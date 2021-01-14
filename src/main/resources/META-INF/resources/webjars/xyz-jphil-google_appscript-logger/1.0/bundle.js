/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
/**
 *
 * @author
 * @class
 */
class DefaultJavaLoggerService {
    /**
     *
     * @param {*} tp
     */
    log(tp) {
        console.info(tp);
    }
    constructor() {
    }
}
DefaultJavaLoggerService["__class"] = "xyz.jphil.google_appscript.logger.DefaultJavaLoggerService";
DefaultJavaLoggerService["__interfaces"] = ["xyz.jphil.google_appscript.logger.GlobalLoggerServiceProvider"];
/**
 *
 * @author
 * @class
 */
class Logger {
    static SERVICE_$LI$() { if (Logger.SERVICE == null) {
        Logger.SERVICE = new DefaultJavaLoggerService();
    } return Logger.SERVICE; }
    static log(tp) {
        Logger.SERVICE_$LI$().log(tp);
    }
}
Logger["__class"] = "xyz.jphil.google_appscript.logger.Logger";
Logger.SERVICE_$LI$();
