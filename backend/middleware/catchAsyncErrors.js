module.exports = (theFunc) => (req, res, next) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };
  //bhr bhr try catch block use nhi krna pade that's why we are using this