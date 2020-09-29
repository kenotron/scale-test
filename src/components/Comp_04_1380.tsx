// Comp_04_1380
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6900 from './Comp_05_6900';
import Comp_05_6901 from './Comp_05_6901';
import Comp_05_6902 from './Comp_05_6902';
import Comp_05_6903 from './Comp_05_6903';
import Comp_05_6904 from './Comp_05_6904';

const Comp_04_1380: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1380
      <div>
      <Comp_05_6900></Comp_05_6900>';
<Comp_05_6901></Comp_05_6901>';
<Comp_05_6902></Comp_05_6902>';
<Comp_05_6903></Comp_05_6903>';
<Comp_05_6904></Comp_05_6904>';
        </div>
      </div>;
};

export default Comp_04_1380;
