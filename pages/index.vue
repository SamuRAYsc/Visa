<template lang="pug">
  Flex(v-if="flex && flex.length" :flex="flex")
</template>

<script>
import Flex from '~/components/Flex/Flex'

export default {
  components: { Flex },
  async asyncData({ $axios, error }) {
    try {
      const [page] = await $axios.$get('/wp/pages?slug=home')

      const { flex = [] } = page.acf || {}

      return { flex }
    } catch {
      error({ statusCode: 404 })
    }
  }
}
</script>
