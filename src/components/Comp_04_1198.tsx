// Comp_04_1198
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5990 from './Comp_05_5990';
import Comp_05_5991 from './Comp_05_5991';
import Comp_05_5992 from './Comp_05_5992';
import Comp_05_5993 from './Comp_05_5993';
import Comp_05_5994 from './Comp_05_5994';

const Comp_04_1198: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1198
      <div>
      <Comp_05_5990></Comp_05_5990>';
<Comp_05_5991></Comp_05_5991>';
<Comp_05_5992></Comp_05_5992>';
<Comp_05_5993></Comp_05_5993>';
<Comp_05_5994></Comp_05_5994>';
        </div>
      </div>;
};

export default Comp_04_1198;
