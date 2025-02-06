// https://blog.antosubash.com/posts/openid-connect-with-nextjs-with-openid-client-6-and-next-15
import { defaultSession, getSession } from '@/lib'

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return Response.json({ defaultSession })
    }
    return Response.json({
      isLoggedIn: session.isLoggedIn,
      userInfo: session.userInfo,
    })
  } catch (e) {
    return Response.json({ error: e }, { status: 500 })
  }
}
