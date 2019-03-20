const moment = require("moment");

const logger = (req, res, next) => {
  // always call next last so you can move to the next
  // MW function that's in the stack
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  // req.protocol = 'http'
  // req.get('host') = "localhost"
  // req.originalUrl = '/api/members'
  next();
};

module.exports = logger;
