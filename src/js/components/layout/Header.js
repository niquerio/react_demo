import React from 'react';
import { Link } from "react-router";

export default class Header extends React.Component{
  render(){
    return(
    <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <Link to='' class='navbar-brand'>GuiDoReMi</Link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><Link to='about' activeClassName="active">About</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
    </div>
    )
  }
}

