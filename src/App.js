import {Tabs, Page, Text} from '@geist-ui/react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Page>
      <Page.Header>
        <h1>gryphy</h1>
        <Text><em>A Gryphons best friend</em></Text>
        <Tabs initialValue='1'>
          <Tabs.Item label="home" value="1"><Home/></Tabs.Item>
          <Tabs.Item label="tools" value="2"></Tabs.Item>
        </Tabs>
      </Page.Header>
      <Page.Footer>
        <p className="inactive"> <strong>&copy; Gryphy 2021</strong> · Not affiliated with the University of Guelph. · <a href='/about'>More Information</a></p>
      </Page.Footer>
    </Page>
  );
}

export default App;
