// Comp_04_1598
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7990 from './Comp_05_7990';
import Comp_05_7991 from './Comp_05_7991';
import Comp_05_7992 from './Comp_05_7992';
import Comp_05_7993 from './Comp_05_7993';
import Comp_05_7994 from './Comp_05_7994';

const Comp_04_1598: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1598
      <div>
      <Comp_05_7990></Comp_05_7990>';
<Comp_05_7991></Comp_05_7991>';
<Comp_05_7992></Comp_05_7992>';
<Comp_05_7993></Comp_05_7993>';
<Comp_05_7994></Comp_05_7994>';
        </div>
      </div>;
};

export default Comp_04_1598;
