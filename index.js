/** @jsx plainJSX */

import "plain-jsx"
import {ajax} from "nanoajax";

function $(query) { return document.querySelector(query); }

const url = 'data.json';

ajax({url}, (code, text) => {
    const data = JSON.parse(text);
    const list = $('#selectedProjects > ul');

    data.selectedProjects.forEach(project => {
        let projectDOM = make(project);
        list.appendChild(projectDOM);
    });
});

function make(project) {
    return <li id={project.name}>
        <span class='topText'>
            <span class='name'>{project.name}</span> <span class='at'>@</span>
            <span class='place'>{project.place}</span>
        </span>
        <figure>
            <label for={`mn-${project.name}`} class='margin-toggle'>⊕</label>
            <input type='checkbox' id={`mn-${project.name}`} class='margin-toggle'/>
            <span class='description marginnote'>{project.description}</span>
            <img src={`images/${project.name}.png`}/>
        </figure>
    </li>;

    // <li>
    //     <span class='topText'>
    //         <span class='name'>{project.name}</span> @
    //         <span class='place'>{project.place}</span>
    //     </span>
    //     <figure>
    //         <label for='mn-exports-imports' class='margin-toggle'>⊕</label>
    //         <input type='checkbox' id='mn-exports-imports' class='margin-toggle'/>
    //         <span class='description marginnote'>{project.description}</span>
    //         <img src={`images/${project.name}.png`} alt='Exports and Imports to and from Denmark &amp; Norway from 1700 to 1780'/>
    //     </figure>
    // </li>;
}
