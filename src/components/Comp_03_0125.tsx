// Comp_03_0125
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0625 from './Comp_04_0625';
import Comp_04_0626 from './Comp_04_0626';
import Comp_04_0627 from './Comp_04_0627';
import Comp_04_0628 from './Comp_04_0628';
import Comp_04_0629 from './Comp_04_0629';

const Comp_03_0125: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0125
      <div>
      <Comp_04_0625></Comp_04_0625>';
<Comp_04_0626></Comp_04_0626>';
<Comp_04_0627></Comp_04_0627>';
<Comp_04_0628></Comp_04_0628>';
<Comp_04_0629></Comp_04_0629>';
        </div>
      </div>;
};

export default Comp_03_0125;
