// Comp_04_1780
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8900 from './Comp_05_8900';
import Comp_05_8901 from './Comp_05_8901';
import Comp_05_8902 from './Comp_05_8902';
import Comp_05_8903 from './Comp_05_8903';
import Comp_05_8904 from './Comp_05_8904';

const Comp_04_1780: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1780
      <div>
      <Comp_05_8900></Comp_05_8900>';
<Comp_05_8901></Comp_05_8901>';
<Comp_05_8902></Comp_05_8902>';
<Comp_05_8903></Comp_05_8903>';
<Comp_05_8904></Comp_05_8904>';
        </div>
      </div>;
};

export default Comp_04_1780;
