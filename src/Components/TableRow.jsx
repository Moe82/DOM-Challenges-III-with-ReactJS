import TableCell from './TableCell';
import '../App.css';

export default function TableRow (props) {
  return (
    <div className="row">
      {Array(props.numCols).fill(<TableCell colorSelected={props.colorSelected}/>)}
    </div>
  )
}
