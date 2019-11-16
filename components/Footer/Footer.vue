<template lang="pug">
  footer.footer
    .footer__container.container
      Popular
      Contacts
      Form
    .footer__copyright
      span.footer__text Разработано в&nbsp;
      a.footer__link.link(href="https://lhm.by" target="_blank" rel="noopener") Lighthouse Media
      span.footer__text &nbsp;в 2019 году.
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
  position: relative
  background-color: var(--background-color)
  padding-top: 9.1rem
  display: flex
  flex-direction: column
  &::before
    position: absolute
    margin-top: .3em
    left: 0
    right: 0
    top: 1.6rem
    content: ""
    height: 10rem
    background: url('/images/linetop-light.svg') center / 100% auto no-repeat
    width: 100%
    flex: 1
  &__container
    position: relative
    display: grid
    grid-template-columns: repeat(1, 1fr)
    +media(820px)
      grid-column-gap: 16%
      grid-template-columns: repeat(3, 1fr)
  &__copyright
    margin: 5rem auto .6rem
    +media(450px)
      margin: 5rem auto .6rem 3.6rem
  &__link, &__text
    +fluidType(400px, 1920px, 14px, 16px)
    color: var(--secondary-color)
    font-family: $cr
    letter-spacing: 0.81px
    line-height: 1.4rem
</style>
