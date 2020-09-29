// Comp_04_0728
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3640 from './Comp_05_3640';
import Comp_05_3641 from './Comp_05_3641';
import Comp_05_3642 from './Comp_05_3642';
import Comp_05_3643 from './Comp_05_3643';
import Comp_05_3644 from './Comp_05_3644';

const Comp_04_0728: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0728
      <div>
      <Comp_05_3640></Comp_05_3640>';
<Comp_05_3641></Comp_05_3641>';
<Comp_05_3642></Comp_05_3642>';
<Comp_05_3643></Comp_05_3643>';
<Comp_05_3644></Comp_05_3644>';
        </div>
      </div>;
};

export default Comp_04_0728;
