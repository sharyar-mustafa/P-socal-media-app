import axios from 'axios';

export const loginUser = (email, password) => async dispatch => {
    try {
        dispatch({
            type: 'LoginUser'
        })
        const { data } = await axios.post(
            'api/v1/login', { email, password },
            {
                headers: { ContentType: 'application/json' }
            })
        dispatch({
            type: 'LoginUserSuccess',
            payload: data.user
        })
    }

    catch (error) {
        dispatch({
            type: 'LoginUserFail',
            payload: error.response.data.msg
        })
    }

}

export const LoadeUser = () => async dispatch => {
    try {
        dispatch({
            type: 'LoadeUserRequest'
        })
     const {data} = await axios.get("/api/v1/me")
        dispatch({
            type: 'LoadeUserSuccess',
            payload: data.user
        })
    }

    catch (error) {
        dispatch({
            type: 'LoadeUserFaild',
            payload: error.response.data.msg
        })
    }

}