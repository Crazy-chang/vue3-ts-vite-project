import Mock from "mockjs"

// 配置 Mock 路径
require.config({
  paths: {
    mock: "http://mockjs.com/dist/mock",
  },
});
Mock.mock('http://localhost:8080/menu',{
    id:123
})
// 加载 Mock
// require(["mock"], function(Mock) {
//   // 使用 Mock
//   var data = Mock.mock({
//     "list|1-10": [
//       {
//         "id|+1": 1,
//       },
//     ],
//   });
//   // 输出结果
//   document.body.innerHTML += "<pre>" + JSON.stringify(data, null, 4) + "</pre>";
// });
