export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('options/fetchOptions')
  }
}
