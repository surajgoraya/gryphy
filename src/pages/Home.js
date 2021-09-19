import React from "react";
import { Card, Grid, Page, Text } from "@geist-ui/react";
import { Minimize2 } from '@geist-ui/react-icons'


const Home = () =>{
    return (
        <Page.Content>
        <h3>What?</h3>
            <Text>
                <strong>Gryphy</strong> is an <em>unofficial</em> and <em>unaffiliated</em> web app developed by students at the University of Guelph to make life just a little easier for students.
            </Text>
        <h3>Featured Tools</h3>
        <Grid.Container>
            <Grid xs={24} md={12}>
                <Card shadow style={{cursor: 'pointer'}}>
                    <Grid.Container className='featured__innerGrid'>
                        <Grid><h4><Minimize2 className={'smallIcon'}/></h4></Grid>
                        <Grid><h4>Building Lookup</h4></Grid>
                    </Grid.Container>
                    <p>Confused about what building a short code stands for? This tool will help you find it.</p>
                </Card>
            </Grid>
        </Grid.Container>
        </Page.Content>
    );
}

export default Home;