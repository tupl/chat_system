function nextState( state, storename, nSt) {
  return state.set(
    storename,
    nSt(state.get(storename))
  );
}

export {
  nextState
}
