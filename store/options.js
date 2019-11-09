export const state = () => ({
  phone: '',
  name: '',
  email: '',
  address: ''
})

export const mutations = {
  SET_OPTIONS(state, options) {
    state.phone = options.phone || ''
    state.name = options.name || ''
    state.email = options.email || ''
    state.address = options.address || ''
  }
}

export const actions = {
  async fetchOptions({ commit }) {
    const { acf: options } = await this.$axios.$get('/acf/options/options')

    commit('SET_OPTIONS', options)
  }
}

export const getters = {
  phoneWithoutSymbols: state => (state.phone && state.phone.replace(/[^\d+]/g, '')) || ''
}
