<template lang="pug">
  .text-slider(v-if="slides && slides.length")
    h2.text-slider__heading(v-if="heading") {{ heading }}
    .text-slider__content
      .text-slider__steps
        span.text-slider__step Шаг {{ currentSlide }}
        .text-slider__controls
          button.text-slider__control(
            @click="prev"
            aria-label="Предыдущий слайд"
          )
            img.text-slider_icon(
              src="/images/arrow_left.svg"
            )
          span.text-slider__counter {{ currentSlide }} из {{ slides.length }}
          button.text-slider__control(
            @click="next"
            aria-label="Следующий слайд"
          )
            img.text-slider_icon(
              src="/images/arrow_right.svg"
            )
      .text-slider__slider(
        v-swiper:textSwiper="swiperOptions"
        @slideChange="onSlideChange"
      )
        .text-slider__wrapper.swiper-wrapper
          .text-slider__slide.swiper-slide(
            v-for="slide in slides"
            v-if="slide.text"
            v-html="slide.text"
          )
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    slides: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      currentSlide: 1,
      swiperOptions: {
        speed: 400,
        slidesPerView: 1,
        keyboard: { enabled: true },
        loop: true
      }
    }
  },

  methods: {
    prev() {
      this.textSwiper.slidePrev()
    },

    next() {
      this.textSwiper.slideNext()
    },

    onSlideChange() {
      this.currentSlide = this.textSwiper.realIndex + 1
    }
  }
}
</script>

<style lang="sass" scoped>
  .text-slider
    display: flex
    flex-direction: column
    color: var(--secondary-color)
    position: relative
    &__heading
      +fluidType(400px, 1920px, 28px, 46px)
      font-family: $cr
      color: var(--primary-color)
      letter-spacing: 2.07px
      line-height: 56px
      align-self: center
    &__slider, &__steps
      padding: 4.5rem 0
      +media(750px)
        padding: 10rem 0
    &__content
      display: flex
      background-color: var(--background-color)
      flex-direction: column
      +media(750px)
        flex-direction: row
    &__steps
      background-color: var(--accent-color)
      display: flex
      position: relative
      align-items: center
      justify-content: center
      box-shadow: 0 4px 15px hsla(46, 93%, 56%, .35)
      border-radius: 0 0 4rem 4rem
      +media(750px)
        box-shadow: 4px 0 10px hsla(46, 93%, 56%, .35)
        border-radius: 0 4rem 4rem 0
        width: 34.5%
    &__controls
      position: absolute
      display: flex
      align-items: flex-end
      justify-content: flex-end
      bottom: 0
      margin-bottom: 1.6rem
    &__control
      background-color: transparent
      border: none
      color: transparent
    &__counter
      +fluidType(400px, 1920px, 16px, 24px)
      font-family: $cb
      letter-spacing: 1.21px
      display: flex
      align-self: center
      justify-self: center
      margin: 0 1.5rem
      +media(950px)
        margin: 0 2.5rem
    &__step
      +fluidType(400px, 1920px, 22px, 36px)
      font-family: $cb
      letter-spacing: 1.81px
      line-height: 34px
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      +media(750px)
        color: var(--primary-color)
        background-color: var(--exclude-color)
        height: 11.5rem
        width: 11.5rem
      +media(950px)
        height: 14.6rem
        width: 14.6rem
    &__slider
      width: 100%
      +media(750px)
        width: 65.5%
    &__slide
      +fluidType(400px, 1920px, 16px, 24px)
      font-family: $cr
      letter-spacing: 1.08px
      line-height: 34px
      padding: 0 2rem 0 4rem
      +media(750px)
        padding: 0 4rem 0 7rem
      +media(950px)
        padding: 0 9rem 0 12rem
</style>
