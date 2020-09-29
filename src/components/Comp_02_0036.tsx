// Comp_02_0036
import React from 'react';
import { incModCount } from '../modCount';
import Comp_03_0180 from './Comp_03_0180';
import Comp_03_0181 from './Comp_03_0181';
import Comp_03_0182 from './Comp_03_0182';
import Comp_03_0183 from './Comp_03_0183';
import Comp_03_0184 from './Comp_03_0184';

const Comp_02_0036: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_02_0036
      <div>
      <Comp_03_0180></Comp_03_0180>';
<Comp_03_0181></Comp_03_0181>';
<Comp_03_0182></Comp_03_0182>';
<Comp_03_0183></Comp_03_0183>';
<Comp_03_0184></Comp_03_0184>';
        </div>
      </div>;
};

export default Comp_02_0036;
