// Comp_04_1196
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5980 from './Comp_05_5980';
import Comp_05_5981 from './Comp_05_5981';
import Comp_05_5982 from './Comp_05_5982';
import Comp_05_5983 from './Comp_05_5983';
import Comp_05_5984 from './Comp_05_5984';

const Comp_04_1196: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1196
      <div>
      <Comp_05_5980></Comp_05_5980>';
<Comp_05_5981></Comp_05_5981>';
<Comp_05_5982></Comp_05_5982>';
<Comp_05_5983></Comp_05_5983>';
<Comp_05_5984></Comp_05_5984>';
        </div>
      </div>;
};

export default Comp_04_1196;
