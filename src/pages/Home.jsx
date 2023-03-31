import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import Table from "../components/Table";
import SelectCustom from '../components/Select';
import { rows } from '../components/Table';

function Home() {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [select, setSelect] = useState(null);
  const boolean = (value && value2);

  let entrepriseCalc = rows.map(({ entreprise }) => entreprise)
  let entreprise = entrepriseCalc.filter((element, index) => {
    return entrepriseCalc.indexOf(element) === index;
  });

  const rowsFiltered = select ? rows.filter(item => item.entreprise.includes(select)) : rows;

  const sumBetongGammel = rowsFiltered.reduce((acc, item) => acc + item.betong_gammel, 0);
  const sumBetongNy = rowsFiltered.reduce((acc, item) => acc + item.betong_ny, 0);
  const sumBetongDelta = rowsFiltered.reduce((acc, item) => acc + item.betong_delta, 0);
  const sumForskalingGammel = rowsFiltered.reduce((acc, item) => acc + item.forskaling_gammel, 0);
  const sumForskalingNy = rowsFiltered.reduce((acc, item) => acc + item.forskaling_ny, 0);
  const sumForskalingDelta = rowsFiltered.reduce((acc, item) => acc + item.forskaling_delta, 0);

  const props = [sumBetongGammel, sumBetongNy, sumBetongDelta, sumForskalingGammel, sumForskalingNy, sumForskalingDelta]

  return (
    <Container sx={{display: "flex", justifyContent: "center", height: "100vh", paddingTop: "12px"}}>
        <Stack gap={2}>
            <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Typography variant="h4">Sammenligning av historiske modelldata</Typography>
            </Box>
            <Stack direction="row" gap={2} sx={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker sx={{backgroundColor: "white"}} value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoContainer>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker sx={{backgroundColor: "white"}} value={value2} onChange={(newValue) => setValue2(newValue)} />
                </DemoContainer>
            </Stack>
            {boolean && (
            <>
            <Stack direction="row" gap={2} sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Typography sx={{backgroundColor: "white", padding: "12px", borderRadius: "6px", border: "1px solid", borderColor: "#99999980", minWidth: "200px"}}>Betong delta: {sumBetongDelta} m3</Typography>
                <Typography sx={{backgroundColor: "white", padding: "12px", borderRadius: "6px", border: "1px solid", borderColor: "#99999980", minWidth: "200px"}}>Forskaling delta: {sumForskalingDelta} m2</Typography>
            </Stack>
            <Stack direction="row" gap={2} sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <SelectCustom setSelect={setSelect} value={entreprise} select={select} />
                <Button variant="contained" onClick={() => setSelect(null)}>Nullstill</Button>
            </Stack>
             <Table rowsFiltered={rowsFiltered} props={props}/>
             </>)}
        </Stack>
    </Container>
  )
}

export default Home;