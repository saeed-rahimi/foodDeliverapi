"use strict"
 
const body=document.body;
body.style.padding="0";
body.style.margin="0";
body.style.boxSizing="border-box";
const html=` <div class="menu">
        <ul class="list">
            <li class="item">saeed</li>
            <li class="item">saeed</li>
            <li class="item">saeed</li>
            <li class="item">saeed</li>
            <li class="item">saeed</li>
        </ul>
    </div>`;
    body.insertAdjacentHTML('afterbegin',html)