// Comp_04_0872
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4360 from './Comp_05_4360';
import Comp_05_4361 from './Comp_05_4361';
import Comp_05_4362 from './Comp_05_4362';
import Comp_05_4363 from './Comp_05_4363';
import Comp_05_4364 from './Comp_05_4364';

const Comp_04_0872: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0872
      <div>
      <Comp_05_4360></Comp_05_4360>';
<Comp_05_4361></Comp_05_4361>';
<Comp_05_4362></Comp_05_4362>';
<Comp_05_4363></Comp_05_4363>';
<Comp_05_4364></Comp_05_4364>';
        </div>
      </div>;
};

export default Comp_04_0872;
