import axios from 'axios'

const getData = {
    state:{
        views:[]
    },
    getters: {
        getdata: (state)=>(Length)=> state.views.slice(0,Length)
    },
    actions: {
        async fetchViews({commit}){   
                const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1'
                const response = await axios.get(url);
                const data = await response.data;
                commit('SET_VIEWS',data)
        }
    },
    mutations: {
        SET_VIEWS : (state, data) =>{
            state.views = data;
        }
    }
}
export default getData
/* 
async ()=>{
  const url = "https://jsonplaceholder.typicode.com/photos";
  const respone = await axios.get(url);
  const data = respone.data;
  console.log("potato zakaria",data); 
} */