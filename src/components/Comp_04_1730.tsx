// Comp_04_1730
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8650 from './Comp_05_8650';
import Comp_05_8651 from './Comp_05_8651';
import Comp_05_8652 from './Comp_05_8652';
import Comp_05_8653 from './Comp_05_8653';
import Comp_05_8654 from './Comp_05_8654';

const Comp_04_1730: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1730
      <div>
      <Comp_05_8650></Comp_05_8650>';
<Comp_05_8651></Comp_05_8651>';
<Comp_05_8652></Comp_05_8652>';
<Comp_05_8653></Comp_05_8653>';
<Comp_05_8654></Comp_05_8654>';
        </div>
      </div>;
};

export default Comp_04_1730;
