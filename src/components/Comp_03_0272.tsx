// Comp_03_0272
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1360 from './Comp_04_1360';
import Comp_04_1361 from './Comp_04_1361';
import Comp_04_1362 from './Comp_04_1362';
import Comp_04_1363 from './Comp_04_1363';
import Comp_04_1364 from './Comp_04_1364';

const Comp_03_0272: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0272
      <div>
      <Comp_04_1360></Comp_04_1360>';
<Comp_04_1361></Comp_04_1361>';
<Comp_04_1362></Comp_04_1362>';
<Comp_04_1363></Comp_04_1363>';
<Comp_04_1364></Comp_04_1364>';
        </div>
      </div>;
};

export default Comp_03_0272;
