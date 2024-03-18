import { Container, Paper } from "@mui/material";

const Projects = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <h1>Projects</h1>
                <p>Projects experience goes here</p>
            </Paper>
        </Container>
    );
}

export default Projects;