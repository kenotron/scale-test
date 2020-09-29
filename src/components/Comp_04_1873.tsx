// Comp_04_1873
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_9365 from './Comp_05_9365';
import Comp_05_9366 from './Comp_05_9366';
import Comp_05_9367 from './Comp_05_9367';
import Comp_05_9368 from './Comp_05_9368';
import Comp_05_9369 from './Comp_05_9369';

const Comp_04_1873: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1873
      <div>
      <Comp_05_9365></Comp_05_9365>';
<Comp_05_9366></Comp_05_9366>';
<Comp_05_9367></Comp_05_9367>';
<Comp_05_9368></Comp_05_9368>';
<Comp_05_9369></Comp_05_9369>';
        </div>
      </div>;
};

export default Comp_04_1873;
