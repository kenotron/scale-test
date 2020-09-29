// Comp_04_1406
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7030 from './Comp_05_7030';
import Comp_05_7031 from './Comp_05_7031';
import Comp_05_7032 from './Comp_05_7032';
import Comp_05_7033 from './Comp_05_7033';
import Comp_05_7034 from './Comp_05_7034';

const Comp_04_1406: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1406
      <div>
      <Comp_05_7030></Comp_05_7030>';
<Comp_05_7031></Comp_05_7031>';
<Comp_05_7032></Comp_05_7032>';
<Comp_05_7033></Comp_05_7033>';
<Comp_05_7034></Comp_05_7034>';
        </div>
      </div>;
};

export default Comp_04_1406;
