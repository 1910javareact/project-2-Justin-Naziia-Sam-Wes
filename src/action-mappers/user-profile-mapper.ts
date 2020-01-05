import { getAllSavedAPI } from "../remote/TopChatUser"

export const UserProfileType = {
    GET_ALL_SAVED_SUCCESSFUL: 'GET_ALL_SAVED_SUCCESSFUL',
    FAILED_GET_ALL_SAVED: 'FAILED_GET_ALL_SAVED'
}

export const getAllSaved = (userId: number) => async (dispatch: any) => {
    try {
        let res = await getAllSavedAPI(userId)
        if (res.status === 200) {
            dispatch({
                type: UserProfileType.GET_ALL_SAVED_SUCCESSFUL,
                payload: {
                    saved: res.body
                }
            })
        }
    } catch (e) {}
}