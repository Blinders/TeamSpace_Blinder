import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux'; // 여러개의 Reducer를 하나로 합칠 때 사용되는 redux 내장 메소드

const counterInitialState = {
    value: 0,
    diff: 1
};

// 요 아래에 counter와 extra가 각각 Reducer
const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
/*
53 ~ 56 과 같은 형태도 2개 Reducer를 하나로 조합(combine)
이 위 Reducer로 Store를 만들면 store의 state 구조는 아래와 같음
{
    counter: { value: 0, diff: 1 }
    extra: { value: 'this_is_extra_reducer' }
}
Reducer를 여러개로 분리 작성 시, 주의할 점은 서로 직접적인 관계가 없어야 한다는 것.
예를 들어 본 예제의 INCREMENT와 DECREMENT에서 diff 값을 사용해야 하므로 SET_DIFF를 다른 Reducer에 작성하진 않는다.
아래 combileReducer의 의미는 요 아래 코드와 동일 의미다.
const counterApp = ( state = { }, action ) => {
    return {
        counter: counter(state.counter, action),
        extra: extra(state.extra, action)
    }
}
*/
const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;
