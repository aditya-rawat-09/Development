class expressError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

module.exports = expressError;