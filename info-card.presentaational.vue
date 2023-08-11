<template>
  <div :class="{[`info-card-presentational inline large flex vertical corner text-${textAlign}`]: true, bgGray: backgroundColor === 'gray' }">
    <i v-if="iconClass.length" :class="`f1 circle large default disabled ${iconClass}`"></i>
    <div class="text-medium">{{ headerText }}</div>
    <div>
      <p>{{ descriptionText }}</p>
    </div>
    <a v-if="buttonHref && buttonHref.length && buttonLabel && buttonLabel.length" :href="buttonHref" :class="{ btn: true, cta: true, active: buttonColor === 'main' }">{{ buttonLabel }}</a>
  </div>
</template>

<style lang="scss">
  .info-card-presentational {
    background-color: var(--color-bg);
    &.bgGray {
      background-color: var(--color-bg-l1);
    }
  }
</style>

<script>
export default {
    name: 'InfoCardPresentational',
    props: {
      iconClass: {
        type: String,
        default: '',
      },
      headerText: String,
      descriptionText: String,
      buttonLabel: String,
      buttonHref: String,
      textAlign: {
        type: String,
        default: 'center',
      },
      buttonColor: String,
      backgroundColor: String,
    },
};
</script>
