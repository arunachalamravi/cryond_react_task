import React from 'react'
import Header from './header/Header'
import Productcard from './Productcard'


import {
    BrowserRouter,
    Routes,
    Route, Navigate
} from "react-router-dom";
import Productlist from './Productlist';
import Checkout from './steps/Checkout'
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import BookIcon from '@mui/icons-material/Book';
import EditIcon from '@mui/icons-material/Edit';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden",
    overflow: "hidden",
    borderRight: "1px dashed #ccc",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    overflow: "hidden",
    borderRight: "1px dashed #ccc",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    overflow: "hidden",
    borderRight: "1px dashed #ccc",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

function Main() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);


    const Nav = [
        {
            name: 'Shop',
            to: '/home',
            icon: <AddBusinessIcon />
        },
        {
            name: 'Product list',
            to: '/home',
            icon: <ShoppingBagIcon />
        },

        {
            name: 'checkout',
            to: '/checkout',
            icon: <LibraryAddCheckIcon />
        },
        {
            name: 'blog',
            to: '/home',
            icon: <BookIcon />
        },
        {
            name: 'edit',
            to: '/home',
            icon: <EditIcon />
        },


    ]
    return (
        <div>
            <Box sx={{ display: "flex" }}>


                <span class="sidecart">
                    <Link><ShoppingCartCheckoutIcon /></Link>
                </span>

                <Drawer className="hold" variant="permanent" open={open} >

                    <DrawerHeader className="logoarrow">
                        <div className="logo">
                            <h6>LOGO</h6>
                        </div>
                        <IconButton onClick={() => setOpen(!open)} >
                            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <div className="admincard">
                        <div className="adminimg">
                            <AccountCircleRoundedIcon Width="100%" />
                        </div>
                        <div class="adminp">
                            <h6>Minimal UI</h6>
                            <p>admin</p>
                        </div>
                    </div>

                    <List className="sidehead">
                        {Nav.map((text, index) => (
                            <Link href={text.to} key={index}>

                                <ListItemButton

                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5

                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                            color: "#1a1a1a",
                                        }}
                                    >
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>


                </Drawer>
                <Box component="main" sx={{ flexGrow: 1 }} className="listing">
                    <AppBar position="fixed" className={`header ${open ? 'headopen' : 'headclose'} `}>
                        <Header />
                    </AppBar>
                    <BrowserRouter>
                        <Routes>

                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="/home" exact element={<Productcard />}>
                            </Route>
                            <Route path="/product" exact element={<Productlist />}>
                            </Route>
                            <Route path="/checkout" exact element={<Checkout />}>
                            </Route>
                            <Route path='/home/:productname' element={<Productlist />}></Route>

                        </Routes>
                    </BrowserRouter>

                </Box>
            </Box>




        </div >
    );
}

export default Main;
