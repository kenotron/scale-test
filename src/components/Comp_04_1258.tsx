// Comp_04_1258
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6290 from './Comp_05_6290';
import Comp_05_6291 from './Comp_05_6291';
import Comp_05_6292 from './Comp_05_6292';
import Comp_05_6293 from './Comp_05_6293';
import Comp_05_6294 from './Comp_05_6294';

const Comp_04_1258: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1258
      <div>
      <Comp_05_6290></Comp_05_6290>';
<Comp_05_6291></Comp_05_6291>';
<Comp_05_6292></Comp_05_6292>';
<Comp_05_6293></Comp_05_6293>';
<Comp_05_6294></Comp_05_6294>';
        </div>
      </div>;
};

export default Comp_04_1258;
