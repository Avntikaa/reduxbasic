const redux=require('redux');

//reducer function
const counterReducer=(state={counter:0},action)=>{
    if(action.type === 'decrement'){
return { counter: state.counter -1, }
}

 if(action.type === 'increment'){
return {
    counter:state.counter+5
}
}
return state;
};

const store=redux.createStore(counterReducer);

//subscriber function
const countSubscriber=()=>{
const lstate=store.getState();
console.log(lstate);
}
store.subscribe(countSubscriber);

store.dispatch({type:'increment'});


