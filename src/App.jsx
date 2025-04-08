import { useEffect, useState } from 'react';
import About from './About';
import ChicagoBanner from './ChicagoBanner';
import Heading from './Heading';
import Roster from './Roster';
import yaml from 'js-yaml';
import Contact from './Contact';
import Watch from './Watch';
import Footer from './Footer';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const request = new XMLHttpRequest();
    request.open('GET', '/drumline.yml', false);
    request.send(null);
    const value = yaml.load(request.responseText);
    value.rosters.sort((a, b) => b.year - a.year);
    setData(value);
  }, []);

  return (
    <div className="app">
      <Heading />
      <ChicagoBanner />
      <About />
      <Contact info={data?.contact} join={data?.join} />
      <Roster rosters={data?.rosters} />
      <Watch videos={data?.videos} />
      <Footer footer={data?.footer} />
    </div>
  );
}

export default App;
