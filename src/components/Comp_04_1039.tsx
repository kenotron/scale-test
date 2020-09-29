// Comp_04_1039
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5195 from './Comp_05_5195';
import Comp_05_5196 from './Comp_05_5196';
import Comp_05_5197 from './Comp_05_5197';
import Comp_05_5198 from './Comp_05_5198';
import Comp_05_5199 from './Comp_05_5199';

const Comp_04_1039: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1039
      <div>
      <Comp_05_5195></Comp_05_5195>';
<Comp_05_5196></Comp_05_5196>';
<Comp_05_5197></Comp_05_5197>';
<Comp_05_5198></Comp_05_5198>';
<Comp_05_5199></Comp_05_5199>';
        </div>
      </div>;
};

export default Comp_04_1039;
