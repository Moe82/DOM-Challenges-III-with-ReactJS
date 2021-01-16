import React, { Component } from 'react'
import TableRow from './TableRow'

export default function Table (props){
  console.log(props.numCols)
  return (
    <table class="center">
      {Array(props.numRows).fill(<TableRow numCols={props.numCols}/>)}
    </table>
  )
}