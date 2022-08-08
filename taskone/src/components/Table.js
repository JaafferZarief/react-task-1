import React, { Component } from 'react'
import "./Table.css"

class Table extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         row:'',
         col:'',
         arr:[],
         rowarr:[],
         colarr:[]
      }
    }

    rowChange = (e) =>{
        this.setState({
            row:e.target.value
        })
    }
    colChange = (e) =>{
        this.setState({
            col:e.target.value
        })
    }
    table = () =>{
      for(let i = 2; i<=this.state.row;i++){
        this.state.arr.push(i);
      }
      this.setState({
        rowarr:this.state.arr
      })
      for(let i = 1; i<=this.state.col;i++){
        this.state.colarr.push(i);
      }
    }
    
  render() {
    return (
      <div>
        <input value={this.state.row} onChange={this.rowChange} />
        <input value={this.state.col} onChange={this.colChange} />
        <button onClick={this.table}>Create</button>
        <table border={'1px'}>
        {
            this.state.colarr.map(c =>(
              <td className='table'>{c}</td>
            ))
          }
          {
            this.state.rowarr.map(r =>(
              <tr className='table'>{r}</tr>
            ))
          }   
        </table>
      </div>
    )
  }
}

export default Table