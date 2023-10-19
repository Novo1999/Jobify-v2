import bcrypt from 'bcryptjs'

const hashPassword = async bodyPassword => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(bodyPassword, salt)
  return hashedPassword
}

export default hashPassword

export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword)
  return isMatch
}
