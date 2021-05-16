<template>
  <v-list-item
    :href="href"
    :rel="href && href !== '#' ? 'noopener' : undefined"
    :target="href && href !== '#' ? '_blank' : undefined"
    :to="item.route"
    :active-class="` ${isDark ? 'text-gray-100' : 'primary--text'}`"
    :height="48"
    class="text-18 pl-6"
    v-ripple="{ class: 'primary--text' }"
  >

    <v-list-item-icon v-if="item.icon" style="color:  #A0AAC8">
      <v-icon v-text="item.icon" style="color:  #A0AAC8" />
    </v-list-item-icon>

    <v-list-item-content
      class="p-0 text-13 font-size-large"
    >
      <v-list-item-title class="m-0 font-size-large" v-text="item.text" style="color:  #A0AAC8" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import Themeable from "vuetify/lib/mixins/themeable";

export default {
  name: "Item",

  mixins: [Themeable],

  props: {
    item: {
      type: Object,
      default: () => ({
        href: undefined,
        icon: undefined,
        subtitle: undefined,
        title: undefined,
        to: undefined,
      }),
    },
    text: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedText() {
      if (!this.item || !this.item.title) return "";

      let text = "";

      this.item.title.split(" ").forEach((val) => {
        text += val.substring(0, 1);
      });

      return text;
    },
    href() {
      return this.item.href || (!this.item.to ? "#" : undefined);
    },
  },
};
</script>
