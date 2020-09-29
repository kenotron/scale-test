// Comp_04_1604
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8020 from './Comp_05_8020';
import Comp_05_8021 from './Comp_05_8021';
import Comp_05_8022 from './Comp_05_8022';
import Comp_05_8023 from './Comp_05_8023';
import Comp_05_8024 from './Comp_05_8024';

const Comp_04_1604: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1604
      <div>
      <Comp_05_8020></Comp_05_8020>';
<Comp_05_8021></Comp_05_8021>';
<Comp_05_8022></Comp_05_8022>';
<Comp_05_8023></Comp_05_8023>';
<Comp_05_8024></Comp_05_8024>';
        </div>
      </div>;
};

export default Comp_04_1604;
