import './App.css';
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import { PrincipalContent } from './components/PrincipalContent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
import ProjectsList from './components/ProjectsList';
import Navbar from './components/Navbar';
import GoTop from './components/GoTop';
import Redes from './components/Redes';
import favicon from './Image/portafolio.ico';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const App = ()  => {
    
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>Sebastián Lagos</title>
      </Helmet>

      <BrowserRouter>
        <Navbar />
        <Container>
            <Switch>
              <Route path="/" exact component={PrincipalContent} />

              <Route path={`/projects/:id`} component={ProjectDetail} />
              
              <Route path="/projects" component={ProjectsList} />

            </Switch>

        </Container>
        <GoTop />
        <Redes />
      </BrowserRouter>
    </>
  );
}

export default App;
