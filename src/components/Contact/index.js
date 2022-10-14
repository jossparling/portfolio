import React, {useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import { validateEmail} from '../../utils/helpers'

const ContactForm = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')
    const { name, email, message } = formState

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Please enter a valid email address')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    return(
        <section className="contact">

            <h2>Contact Me</h2>
            <Stack 
                component="form" 
                spacing={2} 
                sx={{
                    width: 4/5,
                    mx: "auto",
                }}
                
            >
                <TextField  sx={{ color: 'white'}} id="name" name="name" label="Name" variant="outlined" onBlur={handleChange} defaultValue={name} />
                <TextField  sx={{ fontFamily: 'Open Sans'}} id="email" name="email" label="Email" variant="outlined" onBlur={handleChange} defaultValue={email} />
                <TextField  id="message" name="message" label="Message" variant="outlined" onBlur={handleChange} defaultValue={message} multiline rows={4} sx={{ fontFamily: 'Open Sans'}} />
                {errorMessage && <Alert severity="error" variant="filled" sx={{ fontFamily: 'Open Sans'}} >{errorMessage}</Alert>}
                <Button variant="outlined" onClick={handleSubmit} >
                    Submit  &nbsp;&nbsp;<SendIcon />
                </Button>
        </Stack>
        </section>
        
        
        
    )
}

export default ContactForm