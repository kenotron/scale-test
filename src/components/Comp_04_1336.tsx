// Comp_04_1336
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6680 from './Comp_05_6680';
import Comp_05_6681 from './Comp_05_6681';
import Comp_05_6682 from './Comp_05_6682';
import Comp_05_6683 from './Comp_05_6683';
import Comp_05_6684 from './Comp_05_6684';

const Comp_04_1336: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1336
      <div>
      <Comp_05_6680></Comp_05_6680>';
<Comp_05_6681></Comp_05_6681>';
<Comp_05_6682></Comp_05_6682>';
<Comp_05_6683></Comp_05_6683>';
<Comp_05_6684></Comp_05_6684>';
        </div>
      </div>;
};

export default Comp_04_1336;
