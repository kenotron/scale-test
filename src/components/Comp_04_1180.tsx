// Comp_04_1180
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5900 from './Comp_05_5900';
import Comp_05_5901 from './Comp_05_5901';
import Comp_05_5902 from './Comp_05_5902';
import Comp_05_5903 from './Comp_05_5903';
import Comp_05_5904 from './Comp_05_5904';

const Comp_04_1180: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1180
      <div>
      <Comp_05_5900></Comp_05_5900>';
<Comp_05_5901></Comp_05_5901>';
<Comp_05_5902></Comp_05_5902>';
<Comp_05_5903></Comp_05_5903>';
<Comp_05_5904></Comp_05_5904>';
        </div>
      </div>;
};

export default Comp_04_1180;
