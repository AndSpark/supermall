<template>
  <div class="detail-params" v-if="Object.keys(params).length !== 0">
    <div class="params-rule">
      <table  v-for="(table, index) in params.rule.tables" :key="index">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">
          {{td}}
        </td>
      </tr>
      </table>
    </div>
    <table class="params-info">
      <tr v-for="(item, index) in params.info.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'DetailParams',
  data(){
   return {

   }
  },
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .detail-params {
    font-size: 14px;
    padding: 12px;
    .params-rule {
      table {
        width: 100%;
        tr {
          display: flex;
          justify-content: space-evenly;
          padding: 10px 0;
          border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
          
          td {
            flex: 1;
          }
        }
      }
      table:last-child {
        tr:last-child {    
            border-bottom: 3px solid rgba($color: #000000, $alpha: .1);
        }
      }
    }
    .params-info {
        width: 100%;
      
      tr {
        width: 100%;
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
        td:first-of-type {
          width: 30%;
        }
        td:last-of-type {
          width: 70%;
          color: #ff8196;
        }
      }
    }
    border-bottom: 4px solid rgba(0, 0, 0, 0.062);
  }
</style>