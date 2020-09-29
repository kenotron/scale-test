// Comp_04_1798
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8990 from './Comp_05_8990';
import Comp_05_8991 from './Comp_05_8991';
import Comp_05_8992 from './Comp_05_8992';
import Comp_05_8993 from './Comp_05_8993';
import Comp_05_8994 from './Comp_05_8994';

const Comp_04_1798: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1798
      <div>
      <Comp_05_8990></Comp_05_8990>';
<Comp_05_8991></Comp_05_8991>';
<Comp_05_8992></Comp_05_8992>';
<Comp_05_8993></Comp_05_8993>';
<Comp_05_8994></Comp_05_8994>';
        </div>
      </div>;
};

export default Comp_04_1798;
