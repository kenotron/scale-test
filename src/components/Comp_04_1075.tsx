// Comp_04_1075
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5375 from './Comp_05_5375';
import Comp_05_5376 from './Comp_05_5376';
import Comp_05_5377 from './Comp_05_5377';
import Comp_05_5378 from './Comp_05_5378';
import Comp_05_5379 from './Comp_05_5379';

const Comp_04_1075: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1075
      <div>
      <Comp_05_5375></Comp_05_5375>';
<Comp_05_5376></Comp_05_5376>';
<Comp_05_5377></Comp_05_5377>';
<Comp_05_5378></Comp_05_5378>';
<Comp_05_5379></Comp_05_5379>';
        </div>
      </div>;
};

export default Comp_04_1075;
