const ACTION_ADD_USER = 'ACTION_ADD_USER';


// ====== action creator ======

// creator for MST_SUBMIT
function create_ADD_USER(username, name, iconPath="") {
  return {
    type: ACTION_ADD_USER,
    username: username,
    name: name,
    iconPath: iconpath
  }
}

export {
  create_ADD_USER,
  ACTION_ADD_USER
}
