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
import Checkbox from '@mui/material/Checkbox';


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
                            <h3>Delivery options</h3>
                        </div>

                        <div className='table-dl'>
                            <div className='rightside'>
                                <div className='rightpara c-box'>
                                    <h6> <Checkbox />Standard delivery (Free)</h6>
                                    <p className='content'>Delivered on Monday, August 12</p>
                                </div>
                            </div>
                            <div className='leftside'>
                                <div className='rightpara c-box'>
                                    <h6> <Checkbox />Fast delivery ($2,00)</h6>
                                    <p className='content'>Delivered on Monday, August 5</p>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className='detaillist'>
                        <div className='producthead'>
                            <h3>Delivery options</h3>
                        </div>

                        <div className='table-dl tb'>
                            <div className='rightside1'>
                                <div className='rightpara c-box'>
                                    <h6> <Checkbox />Pay with Paypal</h6>
                                    <p className='content'>You will be redirected to PayPal website to complete your purchase securely.</p>
                                </div>
                                <div className='payment'>

                                </div>
                            </div>
                            <div className='rightside1'>
                                <div className='rightpara c-box'>
                                    <h6> <Checkbox />Credit / Debit Card</h6>
                                    <p className='content'>We support Mastercard, Visa, Discover and Stripe.</p>
                                </div>
                                <div className='payment'>

                                </div>
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
                    <div className='checkbtn'>
                        <Button variant="contained" className="buynow">Complete Order</Button>
                    </div>

                </Grid>
            </Grid>

        </section >
    )
}

export default Step1