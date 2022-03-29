import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button'


const gtgt = [

    { "SubTotal": "Sub Total", "no": "$16.19" },
    { "SubTotal": "Discount", "no": "-" },
    { "SubTotal": "Shipping", "no": "Free" },
    { "SubTotal": "total", "no": "$16.19" },

];


function Step1() {
    const [count, setCount] = useState(1)
    const [minus, setMinus] = useState(1)
    const subtraction = event => setCount(count - 1);
    const addition = event => setCount(count + 1);
    return (
        <section className='p-list'>


            <Grid container spacing={2}>

                <Grid item xs={6} md={7} className='pp-imgg'>
                    <div className='detaillist'>
                        <div className='producthead'>
                            <h3>Card</h3>
                        </div>

                        <div className='table-dl'>
                            <div className='rightside'>
                                <div className='rightpara'>
                                    <h6>Jayvion Simon (HOME)</h6>
                                    <p className='content'>19034 Verna Unions Apt. 164 - Honolulu, RI / 87535</p>
                                    <p className='content'>365-374-4961</p>
                                </div>
                            </div>
                            <div className='leftside'>
                                <Button variant="contained" className="delnow">Deliver to this Address</Button>
                            </div>
                        </div>
                    </div >
                </Grid>

                <Grid item xs={6} md={5}>
                    <div className='detaillist'>
                        <div className='producthead'>
                            <h3>Order Summary</h3>
                        </div>
                        <div className='tablese'>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                                    <TableBody>
                                        {gtgt.map((m) => (
                                            <TableRow
                                                key={m.SubTotal}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {m.SubTotal}
                                                </TableCell>
                                                <TableCell align="left">{m.no}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>

                                </Table>
                            </TableContainer>

                        </div>
                    </div >


                </Grid>
            </Grid>

        </section >
    )
}

export default Step1