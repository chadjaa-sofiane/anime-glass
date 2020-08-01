const scroll = {
   state: {
       scrollY: document.getElementById('app').scrollTop
   },
   getters: {
     getScrollY(state){
        return state.scrollY;
     }
   },
   mutations: {
        UPDATE_SCROLL_TOP(state){
            state.scrollY = document.getElementById('app').scrollTop;
        }  
   }
}
export default scroll