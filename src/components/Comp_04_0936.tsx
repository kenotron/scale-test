// Comp_04_0936
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4680 from './Comp_05_4680';
import Comp_05_4681 from './Comp_05_4681';
import Comp_05_4682 from './Comp_05_4682';
import Comp_05_4683 from './Comp_05_4683';
import Comp_05_4684 from './Comp_05_4684';

const Comp_04_0936: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0936
      <div>
      <Comp_05_4680></Comp_05_4680>';
<Comp_05_4681></Comp_05_4681>';
<Comp_05_4682></Comp_05_4682>';
<Comp_05_4683></Comp_05_4683>';
<Comp_05_4684></Comp_05_4684>';
        </div>
      </div>;
};

export default Comp_04_0936;
