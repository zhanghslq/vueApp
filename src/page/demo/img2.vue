<template>
  <div>
    <uploader></uploader>
    <div class="btn" @click="upload">
      上传
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import uploader from 'vue-easy-uploader'
  Vue.use(Vuex)
  let store = new Vuex.Store({})
  Vue.use(uploader, store)
  import { mapState } from 'vuex'
  import Upload from "./upload";
  import ImageUpload from "vue-image-upload-preview/src/lib/image-upload";
  export default {
    components: {ImageUpload, Upload},
    data () {
      return {
        imgs: []
      }
    },
    computed: {
      ...mapState({
        imgStatus: state => state.imgstore.img_status,
        imgPaths: state => state.imgstore.img_paths
      })
    },
    methods: {
      upload () {
        this.$store.commit('set_img_status', 'uploading')
      },
      submit () {
        let values = []
        for (let key of this.imgPaths) {
          values.push(key)
        }
        this.imgs = values
        console.log(this.imgs)
      }
    },
    watch: {
      imgStatus () {
        if (this.imgStatus === 'finished') {
          this.submit()
        }
      }
    },
    destoryed () {
      this.imgs = []
    }
  }
</script>

<style scoped>
  .btn {
    width: 100%;
    height: 3em;
    background-color: green;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
