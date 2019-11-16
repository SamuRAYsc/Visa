<template lang="pug">
  form.form(autocomplete="off")
    h3.form__heading Обратная связь
    .form__description Оставьет заявку и мы вам перезвоним через 2 минуты
    label.form__label Телефон
      input.form__input(type="tel" name="phone" placeholder="Телефон" v-model="request.phone" @focus="onFocus" @blur="onBlur")
    label.form__label Имя
      input.form__input(type="text" name="name" placeholder="Имя" v-model="request.name" @focus="onFocus" @blur="onBlur")
    button.form__button.button.button--accent-border.button--accent-bg.button--light-text(type="submit" name="submit") Отправить
</template>

<script>
export default {
  data() {
    return {
      request: {
        phone: '',
        name: ''
      }
    }
  },

  methods: {
    onFocus(e) {
      e.target.parentNode.classList.add('active')
    },

    onBlur(e) {
      e.target.parentNode.classList.remove('active')
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  display: flex
  margin: 0 auto
  align-items: center
  flex-direction: column
  color: var(--secondary-color)
  &__label
    display: block
    color: transparent
    font-size: 0
    width: 100%
    position: relative
    &::before, &::after
      +transition(transform, .2s)
      content: ''
      display: block
      position: absolute
      background-color: var(--accent-color)
      bottom: 0
      height: 1px
      width: calc(50% + 1px)
      transform: scaleX(0)
    &::before
      left: 0
      transform-origin: right
    &::after
      right: 0
      transform-origin: left
    &.active
      &::before, &::after
        transform: scaleX(1)
  &__input
    +fluidType(400px, 1920px, 12px, 14px)
    +transition(border-color)
    display: block
    border: none
    border-bottom: 1px solid var(--secondary-color)
    background-color: transparent
    padding: .5rem 0 .7rem
    width: 100%
    margin-top: .7rem
    font-family: $cr
    color: var(--secondary-color)
    &::placeholder
      color: var(--secondary-color)
      opacity: .6
    // &:focus
    //   border-color: var(--accent-color)
  &__button
    margin-top: 1.8rem
    width: 100%
  &__heading
    +fluidType(400px, 1920px, 18px, 24px)
    font-family: $cr
    letter-spacing: 1.21px
    margin-bottom: 0
  &__description
    +fluidType(400px, 1920px, 14px, 16px)
    font-family: $cr
    letter-spacing: 0.81px
    margin: 2.2rem 0
    line-height: 1.4rem
</style>

