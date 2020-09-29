// Comp_04_1120
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5600 from './Comp_05_5600';
import Comp_05_5601 from './Comp_05_5601';
import Comp_05_5602 from './Comp_05_5602';
import Comp_05_5603 from './Comp_05_5603';
import Comp_05_5604 from './Comp_05_5604';

const Comp_04_1120: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1120
      <div>
      <Comp_05_5600></Comp_05_5600>';
<Comp_05_5601></Comp_05_5601>';
<Comp_05_5602></Comp_05_5602>';
<Comp_05_5603></Comp_05_5603>';
<Comp_05_5604></Comp_05_5604>';
        </div>
      </div>;
};

export default Comp_04_1120;
