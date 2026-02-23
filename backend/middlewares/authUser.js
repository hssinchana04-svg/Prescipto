import jwt from "jsonwebtoken"

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    let token = req.headers.utoken
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace('Bearer ', '')
    }

    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login Again" })
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = token_decode.id
    next()

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authUser
