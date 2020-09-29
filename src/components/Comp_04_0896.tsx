// Comp_04_0896
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4480 from './Comp_05_4480';
import Comp_05_4481 from './Comp_05_4481';
import Comp_05_4482 from './Comp_05_4482';
import Comp_05_4483 from './Comp_05_4483';
import Comp_05_4484 from './Comp_05_4484';

const Comp_04_0896: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0896
      <div>
      <Comp_05_4480></Comp_05_4480>';
<Comp_05_4481></Comp_05_4481>';
<Comp_05_4482></Comp_05_4482>';
<Comp_05_4483></Comp_05_4483>';
<Comp_05_4484></Comp_05_4484>';
        </div>
      </div>;
};

export default Comp_04_0896;
