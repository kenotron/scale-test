// Comp_03_0140
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0700 from './Comp_04_0700';
import Comp_04_0701 from './Comp_04_0701';
import Comp_04_0702 from './Comp_04_0702';
import Comp_04_0703 from './Comp_04_0703';
import Comp_04_0704 from './Comp_04_0704';

const Comp_03_0140: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0140
      <div>
      <Comp_04_0700></Comp_04_0700>';
<Comp_04_0701></Comp_04_0701>';
<Comp_04_0702></Comp_04_0702>';
<Comp_04_0703></Comp_04_0703>';
<Comp_04_0704></Comp_04_0704>';
        </div>
      </div>;
};

export default Comp_03_0140;
