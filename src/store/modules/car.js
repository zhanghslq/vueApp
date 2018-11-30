export default {
  state: {
    carData: JSON.parse(window.localStorage.carData || '{}')
  },
  mutations: {
    addToCar(state, option) {
      const productInfo = option.productInfo
      const vue = option.vue
      const id = productInfo.id
      let carData = state.carData
      if (!carData[id]) {
        vue.$set(carData, id, productInfo) // 使用vue实例的$set方法为对象添加属性
      } else {
        carData[id].count += productInfo.count
      }
      window.localStorage.carData = JSON.stringify(state.carData)
    },
    addCount(state, key) {
      state.carData[key].count += 1
      window.localStorage.carData = JSON.stringify(state.carData)
    },
    reduceCount(state, key) {
      state.carData[key].count -= 1
      window.localStorage.carData = JSON.stringify(state.carData)
    }
  },
  getters: {
    carTotalCount(state) {
      let count = 0
      for (let key in state.carData) {
        count += state.carData[key].count
      }
      return count
    },
    carTotalPrice(state) {
      let price = 0
      for (let key in state.carData) {
        price += state.carData[key].price * state.carData[key].count
      }
      return price
    }
  }
}
