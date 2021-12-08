import request from "./request";

export function artist(data) {
  return request({
    url: "http://localhost:8950/apis/api/Pintuan/goodsList",
    data: {
      app_type: "h5",
      app_type_name: "H5",
      project_type: 0,
      version: "v1.2.3",
      token:
        "MDAwMDAwMDAwMMmwgabAu5efvomvnpaKt86woX5gsK-posSXmq2TdnKlvnqAaLW4v7CwdK-kmnuo1cSkh5bHfZ6tu7h7bX1zsJ7HaX2lyqevbK2evq-Yd6vOx4hubQ",
      web_city: 0,
      page_size: 5,
      shop_id: 963,
    },
  });
}
