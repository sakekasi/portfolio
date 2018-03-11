import Vue from "vue"

import "styles/project-tile.less!less";
import "styles/large-project-tile.less!less";
import template from "./large-project-tile.vue.template!vtc";

Vue.component('large-project-tile', {
  props: ['description', 'place', 'id', 'url', 'config', 'hasVideo'],
  render: template.render,
  staticRenderFns: template.staticRenderFns,

  computed: {
    videoSrc() {
      return `videos/${this.id}.mp4`;
    },

    imgSrc() {
      return `images/${this.id}.png`;
    },

    style() {
      let ans = {
        top: `${(this.config && this.config.top) || 0}%`,
        left: `${(this.config && this.config.left) || 0}%`,
      };

      if (this.config && this.config.scale) {
        ans['max-height'] = `${this.config.scale}%`;
      }
      return ans;
    }
  },

  methods: {
    onClick(event) {
      this.$refs.link.click();
    }
  }
});