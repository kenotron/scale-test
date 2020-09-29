// Comp_04_1125
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5625 from './Comp_05_5625';
import Comp_05_5626 from './Comp_05_5626';
import Comp_05_5627 from './Comp_05_5627';
import Comp_05_5628 from './Comp_05_5628';
import Comp_05_5629 from './Comp_05_5629';

const Comp_04_1125: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1125
      <div>
      <Comp_05_5625></Comp_05_5625>';
<Comp_05_5626></Comp_05_5626>';
<Comp_05_5627></Comp_05_5627>';
<Comp_05_5628></Comp_05_5628>';
<Comp_05_5629></Comp_05_5629>';
        </div>
      </div>;
};

export default Comp_04_1125;
