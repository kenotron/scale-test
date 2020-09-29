// Comp_04_0759
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3795 from './Comp_05_3795';
import Comp_05_3796 from './Comp_05_3796';
import Comp_05_3797 from './Comp_05_3797';
import Comp_05_3798 from './Comp_05_3798';
import Comp_05_3799 from './Comp_05_3799';

const Comp_04_0759: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0759
      <div>
      <Comp_05_3795></Comp_05_3795>';
<Comp_05_3796></Comp_05_3796>';
<Comp_05_3797></Comp_05_3797>';
<Comp_05_3798></Comp_05_3798>';
<Comp_05_3799></Comp_05_3799>';
        </div>
      </div>;
};

export default Comp_04_0759;
