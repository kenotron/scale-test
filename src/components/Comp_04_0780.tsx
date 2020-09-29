// Comp_04_0780
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3900 from './Comp_05_3900';
import Comp_05_3901 from './Comp_05_3901';
import Comp_05_3902 from './Comp_05_3902';
import Comp_05_3903 from './Comp_05_3903';
import Comp_05_3904 from './Comp_05_3904';

const Comp_04_0780: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0780
      <div>
      <Comp_05_3900></Comp_05_3900>';
<Comp_05_3901></Comp_05_3901>';
<Comp_05_3902></Comp_05_3902>';
<Comp_05_3903></Comp_05_3903>';
<Comp_05_3904></Comp_05_3904>';
        </div>
      </div>;
};

export default Comp_04_0780;
