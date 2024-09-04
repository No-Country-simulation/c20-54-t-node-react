const tryCatch = fn => (req, res, next) => {
  fn(req, res, next).catch(next)
}

module.exports = tryCatch