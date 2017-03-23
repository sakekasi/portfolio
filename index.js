/** @jsx plainJSX */

import "plain-jsx"
import {ajax} from "nanoajax";
import "style.less!less"

function $(query) { return document.querySelector(query); }

const url = 'data.json';

ajax({url}, (code, text) => {
    const data = JSON.parse(text);
    const selectedProjects = $('#selectedProjects > ul');
    const justForFun = $('#funProjects');

    data.selectedProjects.forEach(project => {
        let projectDOM = makeSelectedProject(project);
        selectedProjects.appendChild(projectDOM);
    });

    data.justForFun.forEach(project => {
      let projectDOM = makeFunProject(project);
      justForFun.appendChild(projectDOM);
    });
});

function makeSelectedProject(project) {
    return <li id={project.name}>
        
        <figure>
            <label for={`mn-${project.name}`} class='margin-toggle'>⊕</label>
            <input type='checkbox' id={`mn-${project.name}`} class='margin-toggle'/>
            <div class='description marginnote'>
                <span class='topText'>
                    <span class='name'>{project.name}</span> <span class='at'>@</span>
                    <span class='place'>{project.place}</span>
                </span>
                <p>
                    {project.description}
                </p>
            </div>
            <div class="imgContainer">
                <img src={`images/${project.name}.png`}/>
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
    <img src={`images/${project.name}.png`}/>
  </div>;
}
