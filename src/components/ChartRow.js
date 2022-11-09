function ChartRow(props) {
  /*
 let category
  switch (props.category) {
    case 1 : category  = 'Escritorio';
      break;
    case 2 : category = 'Mesa';
      break;
    case 3 : category = 'Espejo';
      break;
    case 4 : category = 'Mesa Ratona';
      break;
    default : category = 'Sin categoria'
  }

  let color
  switch (props.color) {
    case 1 : color  = 'Negro';
      break;
    case 2 : color = 'Marron';
      break;
    case 3 : color = 'Blanco';
      break;
    default : color = 'Sin categoria'
  }
  bodega, varietal, precio, descuento y categoria
  */
  return (
    <tr>
      <td>{props.Bodega?.nameBodega}</td>
      <td>{props.Varietal?.nameVarietal}</td>
      <td>${props.price}</td>
      <td>{props.discount*100}%</td>
      {/* <td>
        <ul>
          {props.Categories.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul>
      </td>
      <td>{props.Awards}</td> */}
    </tr>
  );
}

export default ChartRow;
