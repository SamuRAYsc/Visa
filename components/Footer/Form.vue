<template lang="pug">
  form.form
    h3.form__heading Обратная связь
    .form__description Оставьет заявку и мы вам перезвоним через 2 минуты
    input.form__input(type="tel" name="phone" placeholder="Телефон" v-model="request.phone")
    input.form__input(type="text" name="name" placeholder="Имя" v-model="request.name")
    button.form__button(type="submit" name="submit") Отправить
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
  }
}
</script>

<style lang="sass" scoped>
input
  display: block
</style>

