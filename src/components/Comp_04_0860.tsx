// Comp_04_0860
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4300 from './Comp_05_4300';
import Comp_05_4301 from './Comp_05_4301';
import Comp_05_4302 from './Comp_05_4302';
import Comp_05_4303 from './Comp_05_4303';
import Comp_05_4304 from './Comp_05_4304';

const Comp_04_0860: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0860
      <div>
      <Comp_05_4300></Comp_05_4300>';
<Comp_05_4301></Comp_05_4301>';
<Comp_05_4302></Comp_05_4302>';
<Comp_05_4303></Comp_05_4303>';
<Comp_05_4304></Comp_05_4304>';
        </div>
      </div>;
};

export default Comp_04_0860;
