import { Card, Container, Paper, Typography } from "@mui/material";

const Projects = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom> Projects </Typography>
                <div style={{ padding: '20px' }}>
                    <Card elevation={3} sx={{ padding: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> Space Exploration </Typography>
                        <img src="https://via.placeholder.com/150" alt="Space Exploration" />
                        <Typography variant="body1" gutterBottom> A web app that pulls data from various space related APIs to display information. </Typography>
                        <Typography variant="body1" gutterBottom> Technologies: React, TypeScript, Material-UI, Axios, NASA API, SpaceX API, and Open Notify API.</Typography>
                        <Typography variant="body1" gutterBottom>GitHub Repository: <a href="https://github.com/jlthompson96/Space_Exploration">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> Weather Dashboard </Typography>
                        <img src="https://via.placeholder.com/150" alt="Weather Dashboard" />
                        <Typography variant="body1" gutterBottom> A Reactjs based app that displays weather data on a webpage. </Typography>
                        <Typography variant="body1" gutterBottom> Technologies: React, TypeScript, Material-UI, Axios, OpenWeatherMap API.</Typography>
                        <Typography variant="body1" gutterBottom> GitHub Repository: <a href="#">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> 9erPark </Typography>
                        <img src="https://via.placeholder.com/150" alt="9erPark" />
                        <Typography variant="body1" gutterBottom> Collaborating with a team of five, I contributed to the development of an iOS application aimed at providing users with UNC Charlotte parking deck data. Utilizing the Swift programming language and XCode IDE, I programmed the application, ensuring its functionality and usability. In the design phase, I conceptualized and created both low-fidelity and high-fidelity prototypes using Balsamiq and Figma. Throughout the development process, we maintained efficient collaboration and version control management using Git and GitHub. </Typography>
                        <Typography variant="body1" gutterBottom> Technologies: Swift, XCode, Balsamiq, Figma, Git, GitHub.</Typography>
                        <Typography variant="body1" gutterBottom> GitHub Repository: <a href="#">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> BullRun </Typography>
                        <img src="https://via.placeholder.com/150" alt="BullRun" />
                        <Typography variant="body1" gutterBottom> A financial application that allows users to track their assets and learn about financial literacy. </Typography>
                        <Typography variant="body1" gutterBottom> Technologies: React, TypeScript, Material-UI, Axios, Spring Boot, TwelveData API.</Typography>
                        <Typography variant="body1" gutterBottom> GitHub Repository: <a href="#">GitHub Repository</a></Typography>
                    </Card>
                    <Card elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom> Know Social </Typography>
                        <img src="https://via.placeholder.com/150" alt="Know Social" />
                        <Typography variant="body1" gutterBottom> In a team of four, I actively participated in the design and development of an application tasked with retrieving data from Twitter, analyzing tweets, and presenting sentiment analysis results to users. Employing technologies such as Java, JavaFX, JDBC, SQL, and multiple APIs, we successfully integrated Twitter data retrieval and tweet analysis functionalities into the application. </Typography>
                        <Typography variant="body1" gutterBottom> Technologies: Java, JavaFX, JDBC, SQL, Twitter API, and Sentimental Analysis API.</Typography>
                        <Typography variant="body1" gutterBottom> GitHub Repository: <a href="#">GitHub Repository</a></Typography>
                    </Card>
                </div>
            </Paper>
        </Container>
    );
}

export default Projects;