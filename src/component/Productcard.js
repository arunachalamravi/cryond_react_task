import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Details_Data } from './Data';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


function Productcard() {



    return (
        <>
            <section className="productlist">
                <div className='producthead'>
                    <h3>Shop</h3>
                </div>
                <div className='searchbox'>

                </div>

                <Box
                    sx={{
                        display: 'grid',
                        gap: 3,
                        gridTemplateColumns: 'repeat(4, 1fr)',
                    }}
                >
                    {
                        Details_Data && Details_Data.map((e, Index) => {
                            let url = (e.Head).replaceAll(' ', '_')
                            console.log(url);
                            return (
                                <Link to={`/home/${url}`} key={Index}>
                                    <div >

                                        <div className='product-c'>
                                            <div className='listbg'>
                                                <Card className="p-card">
                                                    <CardMedia className='p-img'
                                                        component="img"
                                                        height="140"
                                                        src={e.image}

                                                        alt="green iguana"
                                                    />
                                                    <CardContent className='p-head'>
                                                        <Typography variant="body2" className='content'>
                                                            {e.Head}

                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions className='total-product'>
                                                        <div className='combine'>

                                                            <div className='ciclecolor'>
                                                                <div className='circle t-black'></div>
                                                                {/* <div className={`${e.circle == ' ' && 't-red', 't-blue', 't-green'}`}>{e.circle}</div> */}

                                                                <div className='circle-r t-red'></div>
                                                                <div className='circle-r t-green'></div>
                                                            </div>
                                                            <div className='p-price'>
                                                                <span className='crosscricle'>{e.underprice}</span>
                                                                <h5 className='pricename'>{e.Price}</h5>
                                                            </div>
                                                        </div>
                                                    </CardActions>
                                                </Card>



                                            </div>


                                        </div >


                                    </div>
                                </Link>

                            )
                        })
                    }
                </Box>
            </section >
        </>

    )
}

export default Productcard