import Vue from "vue"

import "./large-project-tile.vue.js";
import "./small-project-tile.vue.js";

import "styles/selected-projects.less!less";
import template from "./selected-projects.vue.template!vtc";

Vue.component('selected-projects', {
  props: ['largeProjects', 'smallProjects'],
  render: template.render,
  staticRenderFns: template.staticRenderFns
});