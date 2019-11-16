<template lang="pug">
  .popular
    h3.popular__heading Популярные визы
    .popular__list
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg 40px"
            sizes=""
            data-srcset=""
          )
        .popular__text США
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg"
            sizes=""
            data-srcset=""
          )
        .popular__text Канада
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg"
            sizes=""
            data-srcset=""
          )
        .popular__text Ирландия
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg, 40px"
            sizes=""
            data-srcset=""
          )
        .popular__text Австралия
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg, 40px"
            sizes=""
            data-srcset=""
          )
        .popular__text Австралия
      .popular__item
        .popular__imgcontainer
          img.popular__img.lazy(
            src="/images/test.jpg"
            alt=""
            data-src="/images/test.jpg, 40px"
            sizes=""
            data-srcset=""
          )
        .popular__text Австралия

</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
  .popular
    color: var(--secondary-color)
    display: flex
    flex-direction: column
    align-items: center
    &__heading
      +fluidType(400px, 1920px, 18px, 24px)
      font-family: $cr
      letter-spacing: 1.21px
      margin-bottom: 2.2rem
    &__list
      width: 10.6rem
      +media(820px)
        width: 100%
    &__item
      display: flex
      align-items: center
      margin-bottom: 1.2rem
    &__imgcontainer
      width: 1.67rem
      height: 1.67rem
      border-radius: 50%
      margin-right: .9rem
      overflow: hidden
    &__img
      width: 100%
      height: 100%
      object-fit: cover
      object-position: 50% 50%
    &__text
      +fluidType(400px, 1920px, 14px, 16px)
      font-family: $cr
      letter-spacing: 0.81px

</style>
