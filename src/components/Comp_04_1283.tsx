// Comp_04_1283
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6415 from './Comp_05_6415';
import Comp_05_6416 from './Comp_05_6416';
import Comp_05_6417 from './Comp_05_6417';
import Comp_05_6418 from './Comp_05_6418';
import Comp_05_6419 from './Comp_05_6419';

const Comp_04_1283: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1283
      <div>
      <Comp_05_6415></Comp_05_6415>';
<Comp_05_6416></Comp_05_6416>';
<Comp_05_6417></Comp_05_6417>';
<Comp_05_6418></Comp_05_6418>';
<Comp_05_6419></Comp_05_6419>';
        </div>
      </div>;
};

export default Comp_04_1283;
