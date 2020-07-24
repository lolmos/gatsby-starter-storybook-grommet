import React from 'react';
import styled from 'styled-components';

import Layout from '../global/Layout';
import Image from '../components/Image';

import { 
  Anchor, 
  Box,
  Button,
  Footer, 
  Header,
  Menu, 
  Text, 
   } from "grommet";

import { Home} from 'grommet-icons'


const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #555;
  margin-top: 60px;
`;

const Label = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 12px;
  letter-spacing: 10px;
  text-transform: uppercase;
`;


const IndexPage = () => (
  <Layout>

      <Header background='brand'>
        <Button 
          icon={<Home /> } hoverIndicator 
          label='Menu'
          />
        <Menu label="account" items={
          [
            { label: 'logout' }
          
          ]
        } />
      </Header>

      <Box as="main" pad="medium" flex overflow="auto">
        <Image />
        <Heading>GatsbyJS + Storybook + Grommet </Heading>
        <Label>Starter</Label>
        </Box>
        <Footer background="light-4" justify="center" pad="small">
          <Text textAlign="center" size="small">
            © {new Date().getFullYear()}, Built with
            {` `}
            <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>
            {` and `}
            <Anchor href="https://v2.grommet.io">Grommet</Anchor>
          </Text>
        </Footer>
  </Layout>
);

export default IndexPage;
