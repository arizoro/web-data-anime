const { authOptions } = require("@/app/api/auth/[...nextauth]/route")
const { getServerSession } = require("next-auth")

export const authUserSesion = async() => {
    const sesion = await getServerSession(authOptions)

    return sesion?.user

}