// Comp_04_0740
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3700 from './Comp_05_3700';
import Comp_05_3701 from './Comp_05_3701';
import Comp_05_3702 from './Comp_05_3702';
import Comp_05_3703 from './Comp_05_3703';
import Comp_05_3704 from './Comp_05_3704';

const Comp_04_0740: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0740
      <div>
      <Comp_05_3700></Comp_05_3700>';
<Comp_05_3701></Comp_05_3701>';
<Comp_05_3702></Comp_05_3702>';
<Comp_05_3703></Comp_05_3703>';
<Comp_05_3704></Comp_05_3704>';
        </div>
      </div>;
};

export default Comp_04_0740;
