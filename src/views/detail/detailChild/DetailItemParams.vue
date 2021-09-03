<template>
  <div id="param-info">
    <p>参数信息</p>
    <table class="info-size" v-for="(table, index) in paramInfo.rule.tables">
      <tr class="tr" v-for="(tr, index) in table">
        <td v-for="(td, index) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="info-set">
      <tr v-for="tr in paramInfo.info.set">
        <td class="set-key">{{ tr.key }}</td>
        <td class="set-value">{{ tr.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.images.length !== 0">
      <img :src="paramInfo.images" alt="" />
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'DetailItemParams',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
#param-info {
  width: 100%;
  height: 612px;
  font-size: 14px;
}
table tr {
  width: 100%;
  height: 40px;
}
td {
  padding-left: 10px;
}
.info-size {
  width: 100%;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  margin-top: 5px;
}
/* .tr {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
} */

.info-set {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.set-key {
  width: 80px;
}
.set-value {
  color: #eb4868;
}
</style>