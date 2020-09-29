// Comp_04_1783
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8915 from './Comp_05_8915';
import Comp_05_8916 from './Comp_05_8916';
import Comp_05_8917 from './Comp_05_8917';
import Comp_05_8918 from './Comp_05_8918';
import Comp_05_8919 from './Comp_05_8919';

const Comp_04_1783: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1783
      <div>
      <Comp_05_8915></Comp_05_8915>';
<Comp_05_8916></Comp_05_8916>';
<Comp_05_8917></Comp_05_8917>';
<Comp_05_8918></Comp_05_8918>';
<Comp_05_8919></Comp_05_8919>';
        </div>
      </div>;
};

export default Comp_04_1783;
