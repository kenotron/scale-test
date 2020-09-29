// Comp_04_1296
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6480 from './Comp_05_6480';
import Comp_05_6481 from './Comp_05_6481';
import Comp_05_6482 from './Comp_05_6482';
import Comp_05_6483 from './Comp_05_6483';
import Comp_05_6484 from './Comp_05_6484';

const Comp_04_1296: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1296
      <div>
      <Comp_05_6480></Comp_05_6480>';
<Comp_05_6481></Comp_05_6481>';
<Comp_05_6482></Comp_05_6482>';
<Comp_05_6483></Comp_05_6483>';
<Comp_05_6484></Comp_05_6484>';
        </div>
      </div>;
};

export default Comp_04_1296;
