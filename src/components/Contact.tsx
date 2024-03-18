import { Container, Paper, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom> Contact Me </Typography>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                    <GitHubIcon sx={{ height: '10%', width: '10%' }} />
                    <EmailIcon sx={{ height: '10%', width: '10%', color: '#999999' }} />
                    <LinkedInIcon sx={{ height: '10%', width: '10%', color: '#0077B5' }} />
                </div>
            </Paper>
        </Container >
    );
}

export default Contact;