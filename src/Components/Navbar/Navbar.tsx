import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import routes from '../../Route/Route';
import { useNavigate } from 'react-router-dom';


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (path: string) => {
        setAnchorElNav(null);
        navigate(path)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" style={{ background: "#222" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Fouzia BENADIDA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {routes.map((page, index) => (
                                <MenuItem key={index} onClick={() =>handleCloseNavMenu(page.path)}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Fouzia BENADIDA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {routes.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handleCloseNavMenu(page.path)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>


                        <Avatar src="data:image/jpeg;base64,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" />


                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;

