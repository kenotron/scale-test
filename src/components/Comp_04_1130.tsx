// Comp_04_1130
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5650 from './Comp_05_5650';
import Comp_05_5651 from './Comp_05_5651';
import Comp_05_5652 from './Comp_05_5652';
import Comp_05_5653 from './Comp_05_5653';
import Comp_05_5654 from './Comp_05_5654';

const Comp_04_1130: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1130
      <div>
      <Comp_05_5650></Comp_05_5650>';
<Comp_05_5651></Comp_05_5651>';
<Comp_05_5652></Comp_05_5652>';
<Comp_05_5653></Comp_05_5653>';
<Comp_05_5654></Comp_05_5654>';
        </div>
      </div>;
};

export default Comp_04_1130;
