import React, { useState, useEffect } from 'react'
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
    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <section className='p-list'>


            <Grid container spacing={2}>

                <Grid item xs={6} md={7} className='pp-imgg'>
                    <div className='detaillist'>
                        <div className='producthead'>
                            <h3>Card</h3>
                        </div>

                        <div className='table-d'>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table" style={{ minwidth: '200px' }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product</TableCell>
                                            <TableCell align="right">Price</TableCell>
                                            <TableCell align="right">Quantity</TableCell>
                                            <TableCell align="right">Total Price</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                Nike Air Force 1 NDESTRUKT
                                            </TableCell>
                                            <TableCell align="right">$16.19</TableCell>
                                            <TableCell align="right"><div className='quantity'>
                                                <div className='addsub'>
                                                    <div className='q-flex'>
                                                        <span className='q-sub' onClick={setCount(count - 1)}>-</span>
                                                        <span className='q-text'>{count}</span>
                                                        <span className='q-add' onClick={() => setCount(count + 1)}>+</span>
                                                    </div>
                                                </div>
                                            </div></TableCell>
                                            <TableCell align="right">$16.19</TableCell>
                                            <TableCell align="right"><DeleteForeverIcon /></TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
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
                            <div className='discount'>
                                <span className='disc'>Discount</span>
                                <span className='app'>Apply</span>
                            </div>
                        </div>
                    </div >
                    <div className='checkbtn'>
                        <Button variant="contained" className="buynow">Check Now</Button>
                    </div>

                </Grid>
            </Grid>

        </section >
    )
}

export default Step1