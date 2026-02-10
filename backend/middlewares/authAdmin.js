import jwt from "jsonwebtoken"

//admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    let token = req.headers.atoken
    if (!token && req.headers.authorization) {
      token = req.headers.authorization.replace('Bearer ', '')
    }

    if (!token) {
      return res.json({ success: false, message: "Unauthorized" })
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET)

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Unauthorized" })
    }

    next()

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authAdmin