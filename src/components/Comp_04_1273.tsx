// Comp_04_1273
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6365 from './Comp_05_6365';
import Comp_05_6366 from './Comp_05_6366';
import Comp_05_6367 from './Comp_05_6367';
import Comp_05_6368 from './Comp_05_6368';
import Comp_05_6369 from './Comp_05_6369';

const Comp_04_1273: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1273
      <div>
      <Comp_05_6365></Comp_05_6365>';
<Comp_05_6366></Comp_05_6366>';
<Comp_05_6367></Comp_05_6367>';
<Comp_05_6368></Comp_05_6368>';
<Comp_05_6369></Comp_05_6369>';
        </div>
      </div>;
};

export default Comp_04_1273;
