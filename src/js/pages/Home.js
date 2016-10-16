import React from "react";
import Branch from "../components/tree/Branch";
import TreeStore from "../stores/TreeStore";

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      tree: TreeStore.getTree(),
    };
  }
  render() {
    const {tree} = this.state;
    const BranchComponents = tree.map((branch,idx)=>{
      return <Branch key={idx} leaves={branch}/>
    });
    return (
      <div>
      <h1>Skills</h1>
      <ul>{BranchComponents}</ul>
      </div>
    );
  }
}
