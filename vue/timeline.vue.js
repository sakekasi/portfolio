import Vue from "vue"

import "styles/timeline.less!less";
import template from "./timeline.vue.template!vtc";

Vue.component('timeline', {
  props: ['events'],
  render: template.render,
  staticRenderFns: template.staticRenderFns
});