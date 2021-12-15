
import layout from "@/layout/index.vue";
export default {
    namespaced: true,
    state: {
        isCollapse: false,
        ruleRouters: [],
    },
    mutations: {
        changeCollapse(state: any, value: any) {
            state.isCollapse = !state.isCollapse;
        },
        setRouter(state: any, data: any) {
            state.ruleRouters = data;
        },
    },
    actions: {
        setRouter({ commit }: any, data: any) {
            return new Promise(resolve => {

                const routers = [
                    {
                        path: "/man",
                        name: "Man",
                        component: layout,
                        meta: {
                            title: "数据",
                        },
                        redirect: "/wan/editor",
                        children: [
                            {
                                path: "/man/two",
                                name: "Two",
                                meta: {
                                    title: "第一个",
                                },
                                component: () => import("@/views/other/two.vue"),
                            },
                            {
                                path: "/man/about",
                                name: "About",
                                meta: {
                                    title: "第二个",
                                },
                                component: () => import("@/views/other/About.vue"),
                            }
                        ],
                    }
                ];

                commit("setRouter", routers);
                resolve(routers)
            })
        },
    },
    getters: {

    },
};
