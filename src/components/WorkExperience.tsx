import { Container, Paper, Typography } from "@mui/material";
import WFLogo from '../assets/WF_Logo.png';

const WorkExperience = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Work Experience</Typography>
                <div className="wf" style={{ padding: '20px' }}>
                    <img src={WFLogo} alt="Wells Fargo Logo" style={{ width: '100px', height: '100px', borderRadius: '30px', padding: '20px' }} />
                    <Typography variant="h5">Software Engineer</Typography>
                </div>
            </Paper>
        </Container>
    );
}

export default WorkExperience;