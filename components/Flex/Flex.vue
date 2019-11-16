<template lang="pug">
    div
        Component(
            v-if="flexComponents.length"
            v-for="(flexComponent, index) in flexComponents"
            v-bind="flexProps[index]"
            :key="`${flex[index].acf_fc_layout}-${index}`"
            :id="`${flex[index].acf_fc_layout}-${index + 1}`"
            :is="flexComponent"
        )
</template>

<script>
export default {
  props: {
    flex: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      flexComponents: [],
      flexProps: []
    }
  },
  created() {
    this.flexComponents = this.flex.map(component => {
      const { acf_fc_layout: slug } = component
      return () => this.getFlexComponent(slug)
    })
    this.flexProps = this.flex.map(flexProp => {
      const { acf_fc_layout: slug, ...rest } = flexProp
      return rest
    })
  },
  methods: {
    getFlexComponent(slug) {
      return import(`~/components/Flex/FlexComponents/${slug}`).catch(() => {
        return import(
          /* webpackChunkName: 'flex-error' */ '~/components/Flex/FlexComponents/Error'
        )
      })
    }
  }
}
</script>
