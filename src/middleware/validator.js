"use strict";
module.exports = (req, res, next) => {
  if (typeof req.query.name === "string") {
    req.info={name:req.query.name,status:200}
    next();
  } else {
    req.info={name:"error there is no query ",status:500}

    next();
  }
};
