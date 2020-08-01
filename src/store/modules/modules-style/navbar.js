const navbar = {
    state: {
        NavDrawer :false
      },
      getters:{
        NavDraw(state){
          return state.NavDrawer;
        }
      },
      mutations: {
        OPEN_NAV(state){
          state.NavDrawer = !state.NavDrawer;
        },
        CLOSE_NAV(state){
          if(state.NavDrawer == true) state.NavDrawer = false;
        }
      },
      actions: {
        openNav({commit}){
          return commit('OPEN_NAV');
        },
        closeNav({commit}){
          return commit('CLOSE_NAV');
        }
      }
}
export default navbar