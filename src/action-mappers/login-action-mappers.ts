import { userLogin } from "../remote/TopChatUser"

export const uLoginTypes = {
    SUCCESSFUL_LOGIN: 'USER_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'USER_LOGIN_FAILED_LOGIN'
}

export const uLogin = (username:string, password:string) => async (dispatch: any) => {
    try {
        let res = await userLogin(username, password)
        if(res.status === 200) {
            dispatch({
                type: uLoginTypes.SUCCESSFUL_LOGIN,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: uLoginTypes.UNSUCCESSFUL_LOGIN
            })
        }
    } catch (e) {
        dispatch({
            type: uLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
}