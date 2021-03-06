import { submitRegisterUser } from "../remote/TopChatUser"

export const rUserTypes = {
    SUCCESSFUL_REGISTER: 'USER_REGISTER_SUCCESSFUL',
    UNSUCCESSFUL_REGISTER: 'USER_REGISTER_UNSUCCESSFUL'
}

export const registerUser = (userId:number, username:string, firstName:string, lastName:string, email:string, created:Date, password:string) => async (dispatch: any) => {
    try {
        let res = await submitRegisterUser(userId, username, firstName, lastName, email, created, password)
        if(res.status === 200) {
            dispatch({
                type: rUserTypes.SUCCESSFUL_REGISTER,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: rUserTypes.UNSUCCESSFUL_REGISTER
            })
        }
    } catch (e) {
        dispatch({
            type: rUserTypes.UNSUCCESSFUL_REGISTER
        })
    }
}