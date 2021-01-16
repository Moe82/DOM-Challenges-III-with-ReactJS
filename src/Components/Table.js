import React, { Component } from 'react'
import TableRow from './TableRow'

export default function Table (props){
  return (
    <table class="center">
      {Array(props.numRows).fill(<TableRow numCols={props.numCols} colorSelected={props.colorSelected}/>)}
    </table>
  )
}