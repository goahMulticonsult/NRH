import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(entreprise, element, MMI_gammel, MMI_ny, betong_gammel, betong_ny, betong_delta, forskaling_gammel, forskaling_ny, forskaling_delta) {
  return { entreprise, element, MMI_gammel, MMI_ny, betong_gammel, betong_ny, betong_delta, forskaling_gammel, forskaling_ny, forskaling_delta };
}

export const rows = [
  createData('1.2.3', '2.3.42', 100, 200, 200, 300, 100, 240, 300, 60),
  createData('1.2.3', '2.3.43', 200, 300, 500, 600, 100, 370, 430, 60),
  createData('1.2.3', '2.3.44', 200, 300, 20, 30, 10, 5, 8, 3),
  createData('1.2.3', '2.3.45', 300, 400, 60, 80, 20, 16, 20, 4),
  createData('1.2.3', '2.3.46', 300, 400, 80, 100, 20, 49, 59, 10),
  createData('1.2.4', '3.3.42', 100, 200, 200, 500, 300, 340, 500, 160),
  createData('1.2.4', '3.3.43', 200, 300, 500, 700, 200, 370, 530, 160),
  createData('1.2.4', '3.3.44', 200, 300, 20, 30, 10, 5, 8, 3),
  createData('1.2.4', '3.3.45', 300, 400, 60, 80, 20, 16, 20, 4),
  createData('1.2.4', '3.3.46', 300, 400, 80, 100, 20, 49, 59, 10),
  createData('2.2.4', '4.3.42', 100, 200, 200, 300, 100, 240, 300, 60),
  createData('2.2.4', '4.3.43', 200, 300, 500, 600, 100, 370, 430, 60),
  createData('2.2.4', '4.3.44', 200, 300, 20, 30, 10, 5, 8, 3),
  createData('2.2.4', '4.3.45', 300, 400, 60, 80, 20, 16, 20, 4),
  createData('2.2.4', '4.3.46', 300, 400, 180, 200, 20, 149, 259, 110),
];

export default function BasicTable({rowsFiltered, props}) {
    const [sumBetongGammel, sumBetongNy, sumBetongDelta, sumForskalingGammel, sumForskalingNy, sumForskalingDelta] = props;
  return (
    <TableContainer component={Paper} sx={{margin: "24px 0 48px 0"}}>
      <Table stickyHeader sx={{ minWidth: 650, paddingLeft: "12px", paddingRight: "12px"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entreprise</TableCell>
            <TableCell align="left">Element</TableCell>
            <TableCell align="right">MMI gammel</TableCell>
            <TableCell align="right">MMI ny</TableCell>
            <TableCell align="right">Betong gammel&nbsp;(m3)</TableCell>
            <TableCell align="right">Betong ny&nbsp;(m3)</TableCell>
            <TableCell align="right">Betong delta&nbsp;(m3)</TableCell>
            <TableCell align="right">Forskaling gammel&nbsp;(m2)</TableCell>
            <TableCell align="right">Forskaling ny&nbsp;(m2)</TableCell>
            <TableCell align="right">Forskaling delta&nbsp;(m2)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsFiltered.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.entreprise}
              </TableCell>
              <TableCell align="left">{row.element}</TableCell>
              <TableCell align="right" sx={{textDecoration: "line-through"}}>{row.MMI_gammel}</TableCell>
              <TableCell align="right" sx={{color: "orange"}}>{row.MMI_ny}</TableCell>
              <TableCell align="right" sx={{textDecoration: "line-through"}}>{row.betong_gammel}</TableCell>
              <TableCell align="right">{row.betong_ny}</TableCell>
              <TableCell align="right"  sx={{color: "orange"}}>{row.betong_delta}</TableCell>
              <TableCell align="right" sx={{textDecoration: "line-through"}}>{row.forskaling_gammel}</TableCell>
              <TableCell align="right">{row.forskaling_ny}</TableCell>
              <TableCell align="right"  sx={{color: "orange"}}>{row.forskaling_delta}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell align="right" sx={{textDecoration: "line-through"}}>{sumBetongGammel}</TableCell>
            <TableCell align="right">{sumBetongNy}</TableCell>
            <TableCell align="right" sx={{color: "orange"}}>{sumBetongDelta}</TableCell>
            <TableCell align="right" sx={{textDecoration: "line-through"}}>{sumForskalingGammel}</TableCell>
            <TableCell align="right">{sumForskalingNy}</TableCell>
            <TableCell align="right" sx={{color: "orange"}}>{sumForskalingDelta}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}