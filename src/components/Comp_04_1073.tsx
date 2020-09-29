// Comp_04_1073
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5365 from './Comp_05_5365';
import Comp_05_5366 from './Comp_05_5366';
import Comp_05_5367 from './Comp_05_5367';
import Comp_05_5368 from './Comp_05_5368';
import Comp_05_5369 from './Comp_05_5369';

const Comp_04_1073: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1073
      <div>
      <Comp_05_5365></Comp_05_5365>';
<Comp_05_5366></Comp_05_5366>';
<Comp_05_5367></Comp_05_5367>';
<Comp_05_5368></Comp_05_5368>';
<Comp_05_5369></Comp_05_5369>';
        </div>
      </div>;
};

export default Comp_04_1073;
