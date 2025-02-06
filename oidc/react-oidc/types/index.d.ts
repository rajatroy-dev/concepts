type SessionData = {
    isLoggedIn: boolean
    access_token?: string
    code_verifier?: string
    state?: string
    userInfo?: {
        sub: string
        name: string
        email: string
        email_verified: boolean
    }
}