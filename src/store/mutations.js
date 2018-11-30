export default {
  setLoadingStatus(state, status) {
    state.showLoading = status
  },
  setLoadingBarStatus(state, status) {
    state.loadingBarStatus = status
  },
  setLoginStatus(state, status) {
    state.isLogin = status
  }
}
