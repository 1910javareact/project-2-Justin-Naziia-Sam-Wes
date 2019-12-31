import { getUserById } from "../remote/TopChatUser"

export const UserByIdType = {
    USER_BY_ID_SUCCESSFUL: 'USER_BY_ID_SUCCESSFUL',
    FAILED_USER_BY_ID: 'FAILED_USER_BY_ID'
}

export const UserById = (userId: number) => async (dispatch: any) => {
    try {
        let res = await getUserById(userId)
        if (res.status === 200) {
            dispatch({
                type: UserByIdType.USER_BY_ID_SUCCESSFUL,
                payload: {
                    user: res.body
                }
            })
        } else {
            dispatch({
                type: UserByIdType.FAILED_USER_BY_ID
            })
        }

    } catch (e) {
        dispatch({
            type: UserByIdType.FAILED_USER_BY_ID
        })
    }
}