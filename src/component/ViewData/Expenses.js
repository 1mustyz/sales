import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Expenses = () => {
    return (
        <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
    );
}
 
export default Expenses;