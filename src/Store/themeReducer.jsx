const themeState = {
   darkTheme: true
}

const themeReducer = (state = themeState, action) => {
   switch (action.type) {
      case 'SWITCH_THEME':
         return { ...state, darkTheme: !state.darkTheme }
      default:
         return state
   }
}

export default themeReducer