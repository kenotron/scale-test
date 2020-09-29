// Comp_04_1728
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8640 from './Comp_05_8640';
import Comp_05_8641 from './Comp_05_8641';
import Comp_05_8642 from './Comp_05_8642';
import Comp_05_8643 from './Comp_05_8643';
import Comp_05_8644 from './Comp_05_8644';

const Comp_04_1728: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1728
      <div>
      <Comp_05_8640></Comp_05_8640>';
<Comp_05_8641></Comp_05_8641>';
<Comp_05_8642></Comp_05_8642>';
<Comp_05_8643></Comp_05_8643>';
<Comp_05_8644></Comp_05_8644>';
        </div>
      </div>;
};

export default Comp_04_1728;
