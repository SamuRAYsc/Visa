<template lang="pug">
  .contacts
    h3.contacts__heading Контакты
    .contacts__text {{ name }}
    .contacts__text {{ address }}
    a.contacts__link(:href="`tel:${phoneWithoutSymbols}`") {{ phone }}
    a.contacts__link(:href="`mailto:${email}`") {{ email }}
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
  &__link, &__text
    +fluidType(400px, 1920px, 14px, 16px)
    color: #ffffff
    font-family: ComfortaaRegular
    font-weight: 400
    letter-spacing: 0.81px

</style>
