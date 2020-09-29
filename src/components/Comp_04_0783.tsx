// Comp_04_0783
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3915 from './Comp_05_3915';
import Comp_05_3916 from './Comp_05_3916';
import Comp_05_3917 from './Comp_05_3917';
import Comp_05_3918 from './Comp_05_3918';
import Comp_05_3919 from './Comp_05_3919';

const Comp_04_0783: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0783
      <div>
      <Comp_05_3915></Comp_05_3915>';
<Comp_05_3916></Comp_05_3916>';
<Comp_05_3917></Comp_05_3917>';
<Comp_05_3918></Comp_05_3918>';
<Comp_05_3919></Comp_05_3919>';
        </div>
      </div>;
};

export default Comp_04_0783;
