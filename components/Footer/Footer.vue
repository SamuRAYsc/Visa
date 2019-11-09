<template lang="pug">
  footer.footer
    .footer__container.container
      Popular
      Contacts
      Form
</template>

<script>
import Contacts from '~/components/Footer/Contacts'
import Popular from '~/components/Footer/Popular'
import Form from '~/components/Footer/Form'
export default {
  components: { Contacts, Popular, Form }
}
</script>

<style lang="sass" scoped>
.footer
  &__container
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-column-gap: 1%
</style>
