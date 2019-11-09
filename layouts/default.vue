<template lang="pug">
  #wrapper
    main#main
      nuxt
    Footer.footer
</template>

<script>
import Footer from '~/components/Footer/Footer'

export default {
  components: { Footer }
}
</script>

<style lang="sass" scoped>
#wrapper
  height: 100%
  display: flex
  flex-direction: column

#main
  flex: 1 0 auto

.footer
  flex-shrink: 0
</style>
