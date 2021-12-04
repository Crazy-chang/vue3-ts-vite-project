<template>
  <div>
    <div ref="myChart" class="pie"></div>
    <div ref="myChartB" class="pie"></div>
    <div ref="myChartA" class="pie"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as echarts from "echarts";

const myChart = ref<any>();
const myChartA = ref<any>();
const myChartB = ref<any>();

const category = ref<any[]>();
const lineData = ref<any[]>();
const barData = ref<any[]>();
const dottedBase = ref(+new Date());

for (let i = 0; i < 20; i++) {
  const date = new Date((dottedBase.value += 1000 * 3600 * 24));
  category.value?.push(
    [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
  );
  const b = Math.random() * 200;
  const d = Math.random() * 200;
  barData.value?.push(b);
  lineData.value?.push(d + b);
}
setTimeout(() => {
  // 初始化实例
  myChart.value = echarts.init(myChart.value!);
  myChart.value.setOption({
    title: { text: "总用户量" },
    tooltip: {},
    xAxis: {
      data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
    },
    yAxis: {},
    series: [
      {
        name: "用户量",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });

  // 初始化实例
  myChartA.value = echarts.init(myChartA.value!);
  myChartA.value.setOption({
    title: { text: "总用户量" },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
  // 初始化实例
  myChartB.value = echarts.init(myChartB.value!);
  myChartB.value.setOption({
    backgroundColor: "#0f375f",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
          backgroundColor: "#333",
        },
      },
    },
    legend: {
      data: ["line", "bar"],
      textStyle: {
        color: "#ccc",
      },
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc",
        },
      },
    },
    series: [
      {
        name: "line",
        type: "line",
        smooth: true,
        showAllSymbol: "auto",
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData,
      },
      {
        name: "bar",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" },
          ]),
        },
        data: barData,
      },
      {
        name: "line",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(20,200,212,0.5)" },
            { offset: 0.2, color: "rgba(20,200,212,0.2)" },
            { offset: 1, color: "rgba(20,200,212,0)" },
          ]),
        },
        z: -12,
        data: lineData,
      },
      {
        name: "dotted",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f",
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData,
      },
    ],
  });
}, 0);
</script>
<style lang="scss" scoped>
.pie {
  width: 300px;
  height: 400px;
}
</style>
