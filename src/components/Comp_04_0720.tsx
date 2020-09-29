// Comp_04_0720
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3600 from './Comp_05_3600';
import Comp_05_3601 from './Comp_05_3601';
import Comp_05_3602 from './Comp_05_3602';
import Comp_05_3603 from './Comp_05_3603';
import Comp_05_3604 from './Comp_05_3604';

const Comp_04_0720: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0720
      <div>
      <Comp_05_3600></Comp_05_3600>';
<Comp_05_3601></Comp_05_3601>';
<Comp_05_3602></Comp_05_3602>';
<Comp_05_3603></Comp_05_3603>';
<Comp_05_3604></Comp_05_3604>';
        </div>
      </div>;
};

export default Comp_04_0720;
