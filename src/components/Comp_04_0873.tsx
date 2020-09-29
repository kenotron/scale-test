// Comp_04_0873
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4365 from './Comp_05_4365';
import Comp_05_4366 from './Comp_05_4366';
import Comp_05_4367 from './Comp_05_4367';
import Comp_05_4368 from './Comp_05_4368';
import Comp_05_4369 from './Comp_05_4369';

const Comp_04_0873: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0873
      <div>
      <Comp_05_4365></Comp_05_4365>';
<Comp_05_4366></Comp_05_4366>';
<Comp_05_4367></Comp_05_4367>';
<Comp_05_4368></Comp_05_4368>';
<Comp_05_4369></Comp_05_4369>';
        </div>
      </div>;
};

export default Comp_04_0873;
