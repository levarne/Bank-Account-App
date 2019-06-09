/**
 * Base error for all application errors to extend
 */
class AppError extends Error {
  constructor (message: string) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export { AppError }
