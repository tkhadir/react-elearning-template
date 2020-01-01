import React from 'react';
import MainMenu from './components/MainMenu'
import MainFeaturedPost from './components/MainFeaturedPost'
import MainContent from './components/MainContent'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './styles/App.css';

const mainFeaturedPost = {
  title: 'My elearning blog header.',
  description:
    "My elearning blog description.",
  image: 'https://unsplash.com/photos/cckf4TsHAuw',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu/>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Switch>
          <Route exact path="/">
            <MainContent/>
          </Route>
          <Route exact path="/Contact">
            <ContactForm/>
          </Route>
        </Switch>
        <Footer description="my footer content"/>
      </Router>
    </div>
  );
}

export default App;
