/** @jsx plainJSX */

import feather from "feather-icons";


import "plain-jsx"
import {ajax} from "nanoajax";
import "styles/style.less!less";
import "styles/me.less!less";

import Vue from "vue"
import "./vue/selected-projects.vue.js";
import "./vue/timeline.vue.js";
import template from "./vue/root.template!vtc";

function $(query) { return document.querySelector(query); }

const url = 'data.json';
var vm = null;

ajax({url}, (code, text) => {
    const data = JSON.parse(text);
    const selectedProjects = $('#selected-projects');
    // const justForFun = $('#funProjects');

    vm = new Vue({
      el: selectedProjects,
      render: template.render,
      staticRenderFns: template.staticRenderFns,
          // <timeline
          //   :events="[]"/>

      data: {
        data
      },

      mounted() {
        feather.replace();
      }
    });


    // data.selectedProjects.forEach(project => {
    //     let projectDOM = makeSelectedProject(project);
    //     selectedProjects.appendChild(projectDOM);
    // });

    // data.justForFun.forEach(project => {
    //   let projectDOM = makeFunProject(project);
    //   justForFun.appendChild(projectDOM);
    // });
});

function makeSelectedProject(project) {
    return <li id={project.name} class="selectedProject">
        <figure>
            <label for={`mn-${project.name}`} class='margin-toggle'>⊕</label>
            <input type='checkbox' id={`mn-${project.name}`} class='margin-toggle'/>
            <div class='description marginnote'>
                <a href={project.url || '#'}><span class='topText'>
                    <span class='name'>{project.name}</span> <span class='at'>@</span>
                    <span class='place'>{project.place}</span>
                </span></a>
                <p>
                    {project.description}
                </p>
            </div>
            <div class="imgContainer">
                <img 
                    src={`images/${project.name}.png`}
                    style={`top: ${(project.style && project.style.top) || 0}%`}/>
            </div>
        </figure>
    </li>;
}


function makeFunProject(project) { // 160, 20
  let placeDOM = [' ', <span class='at'>@</span>, <span class='place'>{project.place}</span>];
  return <div class='funProject' id={project.name}>
    <span class='topText'>
      <span class='description'>{project.description}</span>
      {project.place !== null ? placeDOM : null}
    </span>
    <div class="imgContainer">
        <img src={`images/${project.name}.png`}/>
    </div>
  </div>;
}
