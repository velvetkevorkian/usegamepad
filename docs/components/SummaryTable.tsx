const buttonList = ['a', 'b', 'x', 'y', 'lb', 'rb', 'lt', 'rt', 'back', 'start', 'ls', 'rs', 'up', 'down', 'left', 'right']
const axisList = ['ls-x', 'ls-y', 'rs-x', 'rs-y']

type SummaryTableProps = {
  buttons: {
    [key:string]: boolean
  }
  axes: {
    [key:string]: number
  }
}

export const SummaryTable = ({buttons, axes}: SummaryTableProps) => (

<table>
<thead>
  <tr>
    <th>Button</th>
    <th>Pressed</th>
  </tr>
</thead>
<tbody>
{buttonList.map(button => (
  <tr key={button}>
    <td>{button}</td>
    <td>{buttons[button].toString()}</td>
  </tr>
))}
  <tr>
    <th>Axis</th>
    <th>Value</th>
  </tr>
{axisList.map(axis => (
  <tr key={axis}>
    <td>{axis}</td>
    <td>{axes[axis]}</td>
  </tr>
))}
</tbody>
</table>
)
