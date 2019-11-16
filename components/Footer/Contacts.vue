<template lang="pug">
  .contacts
    h3.contacts__heading Контакты
    .contacts__text {{ name }}
    .contacts__text {{ address }}
    a.contacts__link.link(:href="`tel:${phoneWithoutSymbols}`") {{ phone }}
    a.contacts__link.link(:href="`mailto:${email}`" target="_blank") {{ email }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('options', ['phone', 'name', 'address', 'email']),
    ...mapGetters('options', ['phoneWithoutSymbols'])
  }
}
</script>

<style lang="sass" scoped>
.contacts
  display: flex
  align-items: center
  flex-direction: column
  color: var(--secondary-color)
  &__link, &__text
    +fluidType(400px, 1920px, 14px, 16px)
    color: var(--secondary-color)
    font-family: $cr
    letter-spacing: 0.81px
    margin: 0 auto 2.2rem
    line-height: 1.4rem
  &__text
    text-align: center
  &__heading
    +fluidType(400px, 1920px, 18px, 24px)
    font-family: $cr
    letter-spacing: 1.21px
    margin-bottom: 2.2rem
</style>
