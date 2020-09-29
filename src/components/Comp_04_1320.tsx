// Comp_04_1320
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6600 from './Comp_05_6600';
import Comp_05_6601 from './Comp_05_6601';
import Comp_05_6602 from './Comp_05_6602';
import Comp_05_6603 from './Comp_05_6603';
import Comp_05_6604 from './Comp_05_6604';

const Comp_04_1320: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1320
      <div>
      <Comp_05_6600></Comp_05_6600>';
<Comp_05_6601></Comp_05_6601>';
<Comp_05_6602></Comp_05_6602>';
<Comp_05_6603></Comp_05_6603>';
<Comp_05_6604></Comp_05_6604>';
        </div>
      </div>;
};

export default Comp_04_1320;
