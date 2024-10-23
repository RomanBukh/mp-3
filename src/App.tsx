import { useState, useEffect } from 'react'
import styled from "styled-components";
import Header from "./components/Header.tsx";
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';
import Index from "./components/Index.tsx";
import Act from "./components/Act.tsx";
import Ed from "./components/Ed.tsx";
import Proj from "./components/Proj.tsx";
import Ref from "./components/Ref.tsx";
import Work from "./components/Work.tsx";
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    padding: 1%;
    background-color: lightblue;
    margin: 0%;
    text-align: center;

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: column;
    }
`

const StyledNavDiv = styled.div`
    display: flex;
    flex-direction: row; 

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: column;
    }
`

const Root = () => {
  const [title, setTitle] = useState('Home');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <StyledDiv>
      <Header title={title}/>
      <StyledNavDiv>
        <Nav/>
        <Routes>
          <Route path="/" element={<Index setTitle={setTitle}/>}/>
          <Route path="/education" element={<Ed setTitle={setTitle}/>}/>
          <Route path="/work" element={<Work setTitle={setTitle}/>}/>
          <Route path="/projects" element={<Proj setTitle={setTitle}/>}/>
          <Route path="/activites" element={<Act setTitle={setTitle}/>}/>
          <Route path="/references" element={<Ref setTitle={setTitle}/>}/>
        </Routes>
      </StyledNavDiv>
      <Footer/>
    </StyledDiv>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

function App() {
  return (
    <StyledDiv>
      <RouterProvider router={router}/>
    </StyledDiv>
  )
}

export default App
