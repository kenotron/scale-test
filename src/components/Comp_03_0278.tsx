// Comp_03_0278
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1390 from './Comp_04_1390';
import Comp_04_1391 from './Comp_04_1391';
import Comp_04_1392 from './Comp_04_1392';
import Comp_04_1393 from './Comp_04_1393';
import Comp_04_1394 from './Comp_04_1394';

const Comp_03_0278: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0278
      <div>
      <Comp_04_1390></Comp_04_1390>';
<Comp_04_1391></Comp_04_1391>';
<Comp_04_1392></Comp_04_1392>';
<Comp_04_1393></Comp_04_1393>';
<Comp_04_1394></Comp_04_1394>';
        </div>
      </div>;
};

export default Comp_03_0278;
