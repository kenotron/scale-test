// Comp_04_0998
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4990 from './Comp_05_4990';
import Comp_05_4991 from './Comp_05_4991';
import Comp_05_4992 from './Comp_05_4992';
import Comp_05_4993 from './Comp_05_4993';
import Comp_05_4994 from './Comp_05_4994';

const Comp_04_0998: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0998
      <div>
      <Comp_05_4990></Comp_05_4990>';
<Comp_05_4991></Comp_05_4991>';
<Comp_05_4992></Comp_05_4992>';
<Comp_05_4993></Comp_05_4993>';
<Comp_05_4994></Comp_05_4994>';
        </div>
      </div>;
};

export default Comp_04_0998;
