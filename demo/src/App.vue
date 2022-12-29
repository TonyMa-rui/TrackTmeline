<!--
 * @Author: win10 wr154941094@163.com
 * @Date: 2022-12-27 16:19:28
 * @LastEditors: win10 wr154941094@163.com
 * @LastEditTime: 2022-12-27 16:30:13
 * @FilePath: \demo\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <el-radio-group v-model="activeComp" size="small">
      <el-radio-button v-for="item in list" :label="item.value">{{  item.name  }}</el-radio-button>
    </el-radio-group>
    <div class="box">
      <component :is="activeComp"></component>
    </div>
    <div>
      <a href="https://github.com/wanglin2/VideoTimeLine/tree/main/demo/src/components">demo源码</a>
    </div>
  </div>
</template>

<script>
import Base from './components/Base.vue';
import Custom from './components/Custom.vue';``
import MultiSegment from './components/MultiSegment.vue';
import Segment from './components/Segment.vue';
import Year from './components/Year.vue';
import YearMonth from './components/YearMonth.vue';

export default {
  name: 'App',
  components: {
    Custom,
    Base,
    MultiSegment,
    Segment,
    Year,
    YearMonth
  },
  data() {
    return {
      activeComp: 'MultiSegment',
      list: [
        {
          name: '基础用法',
          value: 'Base'
        }, {
          name: '显示时间段',
          value: 'Segment'
        }
        , {
          name: '多个时间轴',
          value: 'MultiSegment'
        }
        , {
          name: '显示自定义元素',
          value: 'Custom'
        }
        , {
          name: '显示到年',
          value: 'Year'
        }
        , {
          name: '显示到年月',
          value: 'YearMonth'
        }
      ]
    }
  },
  methods: {
    change(comp) {
      this.activeComp = comp
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.box {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
</style>
