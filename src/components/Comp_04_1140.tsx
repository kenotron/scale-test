// Comp_04_1140
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5700 from './Comp_05_5700';
import Comp_05_5701 from './Comp_05_5701';
import Comp_05_5702 from './Comp_05_5702';
import Comp_05_5703 from './Comp_05_5703';
import Comp_05_5704 from './Comp_05_5704';

const Comp_04_1140: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1140
      <div>
      <Comp_05_5700></Comp_05_5700>';
<Comp_05_5701></Comp_05_5701>';
<Comp_05_5702></Comp_05_5702>';
<Comp_05_5703></Comp_05_5703>';
<Comp_05_5704></Comp_05_5704>';
        </div>
      </div>;
};

export default Comp_04_1140;
