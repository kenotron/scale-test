// Comp_04_1096
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5480 from './Comp_05_5480';
import Comp_05_5481 from './Comp_05_5481';
import Comp_05_5482 from './Comp_05_5482';
import Comp_05_5483 from './Comp_05_5483';
import Comp_05_5484 from './Comp_05_5484';

const Comp_04_1096: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1096
      <div>
      <Comp_05_5480></Comp_05_5480>';
<Comp_05_5481></Comp_05_5481>';
<Comp_05_5482></Comp_05_5482>';
<Comp_05_5483></Comp_05_5483>';
<Comp_05_5484></Comp_05_5484>';
        </div>
      </div>;
};

export default Comp_04_1096;
