// Comp_04_1272
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6360 from './Comp_05_6360';
import Comp_05_6361 from './Comp_05_6361';
import Comp_05_6362 from './Comp_05_6362';
import Comp_05_6363 from './Comp_05_6363';
import Comp_05_6364 from './Comp_05_6364';

const Comp_04_1272: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1272
      <div>
      <Comp_05_6360></Comp_05_6360>';
<Comp_05_6361></Comp_05_6361>';
<Comp_05_6362></Comp_05_6362>';
<Comp_05_6363></Comp_05_6363>';
<Comp_05_6364></Comp_05_6364>';
        </div>
      </div>;
};

export default Comp_04_1272;
