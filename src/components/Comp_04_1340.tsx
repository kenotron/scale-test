// Comp_04_1340
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6700 from './Comp_05_6700';
import Comp_05_6701 from './Comp_05_6701';
import Comp_05_6702 from './Comp_05_6702';
import Comp_05_6703 from './Comp_05_6703';
import Comp_05_6704 from './Comp_05_6704';

const Comp_04_1340: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1340
      <div>
      <Comp_05_6700></Comp_05_6700>';
<Comp_05_6701></Comp_05_6701>';
<Comp_05_6702></Comp_05_6702>';
<Comp_05_6703></Comp_05_6703>';
<Comp_05_6704></Comp_05_6704>';
        </div>
      </div>;
};

export default Comp_04_1340;
