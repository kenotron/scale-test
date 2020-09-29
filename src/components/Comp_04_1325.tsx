// Comp_04_1325
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6625 from './Comp_05_6625';
import Comp_05_6626 from './Comp_05_6626';
import Comp_05_6627 from './Comp_05_6627';
import Comp_05_6628 from './Comp_05_6628';
import Comp_05_6629 from './Comp_05_6629';

const Comp_04_1325: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1325
      <div>
      <Comp_05_6625></Comp_05_6625>';
<Comp_05_6626></Comp_05_6626>';
<Comp_05_6627></Comp_05_6627>';
<Comp_05_6628></Comp_05_6628>';
<Comp_05_6629></Comp_05_6629>';
        </div>
      </div>;
};

export default Comp_04_1325;
