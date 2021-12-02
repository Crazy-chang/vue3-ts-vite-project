
export default {
    namespaced: true,
    state:{
        isCollapse:false
    },
    mutations:{
        changeCollapse(state:any, value:any){
            state.isCollapse = !state.isCollapse
        }
    },
    actions:{

    },
    getters:{

    }
}