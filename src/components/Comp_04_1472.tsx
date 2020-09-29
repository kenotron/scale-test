// Comp_04_1472
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7360 from './Comp_05_7360';
import Comp_05_7361 from './Comp_05_7361';
import Comp_05_7362 from './Comp_05_7362';
import Comp_05_7363 from './Comp_05_7363';
import Comp_05_7364 from './Comp_05_7364';

const Comp_04_1472: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1472
      <div>
      <Comp_05_7360></Comp_05_7360>';
<Comp_05_7361></Comp_05_7361>';
<Comp_05_7362></Comp_05_7362>';
<Comp_05_7363></Comp_05_7363>';
<Comp_05_7364></Comp_05_7364>';
        </div>
      </div>;
};

export default Comp_04_1472;
