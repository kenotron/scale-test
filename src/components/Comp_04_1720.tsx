// Comp_04_1720
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8600 from './Comp_05_8600';
import Comp_05_8601 from './Comp_05_8601';
import Comp_05_8602 from './Comp_05_8602';
import Comp_05_8603 from './Comp_05_8603';
import Comp_05_8604 from './Comp_05_8604';

const Comp_04_1720: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1720
      <div>
      <Comp_05_8600></Comp_05_8600>';
<Comp_05_8601></Comp_05_8601>';
<Comp_05_8602></Comp_05_8602>';
<Comp_05_8603></Comp_05_8603>';
<Comp_05_8604></Comp_05_8604>';
        </div>
      </div>;
};

export default Comp_04_1720;
