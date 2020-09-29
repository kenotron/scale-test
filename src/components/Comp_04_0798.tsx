// Comp_04_0798
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3990 from './Comp_05_3990';
import Comp_05_3991 from './Comp_05_3991';
import Comp_05_3992 from './Comp_05_3992';
import Comp_05_3993 from './Comp_05_3993';
import Comp_05_3994 from './Comp_05_3994';

const Comp_04_0798: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0798
      <div>
      <Comp_05_3990></Comp_05_3990>';
<Comp_05_3991></Comp_05_3991>';
<Comp_05_3992></Comp_05_3992>';
<Comp_05_3993></Comp_05_3993>';
<Comp_05_3994></Comp_05_3994>';
        </div>
      </div>;
};

export default Comp_04_0798;
