// Comp_04_0980
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4900 from './Comp_05_4900';
import Comp_05_4901 from './Comp_05_4901';
import Comp_05_4902 from './Comp_05_4902';
import Comp_05_4903 from './Comp_05_4903';
import Comp_05_4904 from './Comp_05_4904';

const Comp_04_0980: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0980
      <div>
      <Comp_05_4900></Comp_05_4900>';
<Comp_05_4901></Comp_05_4901>';
<Comp_05_4902></Comp_05_4902>';
<Comp_05_4903></Comp_05_4903>';
<Comp_05_4904></Comp_05_4904>';
        </div>
      </div>;
};

export default Comp_04_0980;
