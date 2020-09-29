// Comp_04_1128
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5640 from './Comp_05_5640';
import Comp_05_5641 from './Comp_05_5641';
import Comp_05_5642 from './Comp_05_5642';
import Comp_05_5643 from './Comp_05_5643';
import Comp_05_5644 from './Comp_05_5644';

const Comp_04_1128: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1128
      <div>
      <Comp_05_5640></Comp_05_5640>';
<Comp_05_5641></Comp_05_5641>';
<Comp_05_5642></Comp_05_5642>';
<Comp_05_5643></Comp_05_5643>';
<Comp_05_5644></Comp_05_5644>';
        </div>
      </div>;
};

export default Comp_04_1128;
