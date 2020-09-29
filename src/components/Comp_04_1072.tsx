// Comp_04_1072
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5360 from './Comp_05_5360';
import Comp_05_5361 from './Comp_05_5361';
import Comp_05_5362 from './Comp_05_5362';
import Comp_05_5363 from './Comp_05_5363';
import Comp_05_5364 from './Comp_05_5364';

const Comp_04_1072: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1072
      <div>
      <Comp_05_5360></Comp_05_5360>';
<Comp_05_5361></Comp_05_5361>';
<Comp_05_5362></Comp_05_5362>';
<Comp_05_5363></Comp_05_5363>';
<Comp_05_5364></Comp_05_5364>';
        </div>
      </div>;
};

export default Comp_04_1072;
