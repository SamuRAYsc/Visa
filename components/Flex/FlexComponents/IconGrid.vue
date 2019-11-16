<template lang="pug">
  .icon-grid
    .icon-grid__container.container
      h2.icon-grid__heading(v-if="heading") {{ heading }}
      .icon-grid__grid
        figure.icon-grid__item(
          v-if="icons && icons.length"
          v-for="icon in icons"
        )
          img.icon-grid__image(
            v-if="icon.image"
            :src="icon.image.url"
            :alt="icon.image.alt || icon.image.name"
          )
          figcaption.icon-grid__caption(v-if="icon.text") {{ icon.text }}
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    icons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
.icon-grid
  margin-bottom: 6.25rem
  padding-top: 14.4rem
  position: relative
  overflow: hidden
  &::before, &::after
    position: absolute
    content: ""
  &::before
    left: 0
    right: 0
    top: 5.5rem
    height: 10rem
    background: url('/images/linetop-dark.svg') center / 100% auto no-repeat
    width: 100%
    flex: 1
  &::after
    background: url('/images/theworld.png') center / 100% 100% no-repeat
    height: 30rem
    width: 30rem
    top: 6.66rem
    right: -2.5rem
    z-index: -1
  &__heading
    +fluidType(400px, 1920px, 28px, 46px)
    color: var(--primary-color)
    font-family: $cr
    letter-spacing: 2.07px
    line-height: 56px
    margin-bottom: 4.3rem
    font-weight: 400
    max-width: 38rem
  &__grid
    display: grid
    max-width: 1200px
    grid-gap: 4.7rem
    margin: 0 auto
    +media(350px)
      grid-template-columns: repeat(2, 1fr)
    +media(600px)
      grid-template-columns: repeat(3, 1fr)
    &::before
      display: none
      content: ''
      grid-row: 1 / 2
      grid-column: 3 / 4
      +media(600px)
        display: block
  &__item
    margin: 0
    display: flex
    flex-direction: column
    align-items: center
  &__image
    height: 5rem
  &__caption
    +fluidType(400px, 1920px, 16px, 21px)
    color: var(--primary-color)
    font-family: $cr
    letter-spacing: 0.94px
    line-height: 1.7rem
    margin-top: 2.2rem
    text-align: center
</style>
