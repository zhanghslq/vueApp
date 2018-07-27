<template>

</template>

<script>
import axios from 'axios'
export default {
  name: 'test',
  methods: {
    test: function () {
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
