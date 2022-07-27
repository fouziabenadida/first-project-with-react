
import React from 'react'
import Btn from '../Button/Btn'
import './Home.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'





export default function Home() {

    const navigate = useNavigate();


    return (
        <>

            <Btn />
            <h1 className='title'>Welcome!</h1>
            <h2 className='sous-titre'>Great to see you in here</h2>
            <div>
                <p className='paragraph'>Welcome to my modest site. I am Fouzia the woman who decided to change her path from hydraulic engineer to web developer. </p>
            </div>
            <div>
                <img className='image' src="https://images.unsplash.com/photo-1593720217529-01f0a5d09aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80" alt="" />
            </div>

            <div>
                <Button
                    onClick={() => {
                        window.location.href = "https://www.linkedin.com/in/fouzia-candas/"
                    }}
                    variant="contained" disableElevation>
                    Get Contact
                </Button>

            </div>

        </>
    )
}
