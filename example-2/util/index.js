/* util/index.js */

Logger = require("./logger.js");

exports.logger = new Logger();
var util = {
    logger: exports.logger
}
