// Comp_04_1398
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6990 from './Comp_05_6990';
import Comp_05_6991 from './Comp_05_6991';
import Comp_05_6992 from './Comp_05_6992';
import Comp_05_6993 from './Comp_05_6993';
import Comp_05_6994 from './Comp_05_6994';

const Comp_04_1398: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1398
      <div>
      <Comp_05_6990></Comp_05_6990>';
<Comp_05_6991></Comp_05_6991>';
<Comp_05_6992></Comp_05_6992>';
<Comp_05_6993></Comp_05_6993>';
<Comp_05_6994></Comp_05_6994>';
        </div>
      </div>;
};

export default Comp_04_1398;
