<template>
    <div>
      <a @click="test">测试股</a>
    </div>
</template>

<script>
    export default {
        name: "TestAlert",
      methods:{
          test:function () {
            console.log("haha")
            alert("hah")
          }
      }
    }

</script>

<style scoped>

</style>
