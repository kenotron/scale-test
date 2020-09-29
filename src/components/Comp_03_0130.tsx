// Comp_03_0130
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0650 from './Comp_04_0650';
import Comp_04_0651 from './Comp_04_0651';
import Comp_04_0652 from './Comp_04_0652';
import Comp_04_0653 from './Comp_04_0653';
import Comp_04_0654 from './Comp_04_0654';

const Comp_03_0130: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0130
      <div>
      <Comp_04_0650></Comp_04_0650>';
<Comp_04_0651></Comp_04_0651>';
<Comp_04_0652></Comp_04_0652>';
<Comp_04_0653></Comp_04_0653>';
<Comp_04_0654></Comp_04_0654>';
        </div>
      </div>;
};

export default Comp_03_0130;
