import {EUserAction, IUser, IUserCreateAction} from "../../types/type";
import {call, Effect, put,takeEvery} from 'redux-saga/effects'
import {UserApi} from "../../api";

function* sagaCreateUser(action: IUserCreateAction): Generator<Effect, void>{
    try {
        const userObj: Partial<IUser> = action.payload;

        const user = yield call(UserApi.createUser, userObj);
        yield put({type: EUserAction.CREATE_USER, payload: user})
    }
    catch (e){
        console.log('err ' + e + ' in sagaCreateUser');
    }
}

export function* sagaWatcher(): Generator<Effect, void>{
    yield takeEvery(EUserAction.CREATE_USER, sagaCreateUser)
}