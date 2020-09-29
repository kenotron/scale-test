// Comp_03_0273
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1365 from './Comp_04_1365';
import Comp_04_1366 from './Comp_04_1366';
import Comp_04_1367 from './Comp_04_1367';
import Comp_04_1368 from './Comp_04_1368';
import Comp_04_1369 from './Comp_04_1369';

const Comp_03_0273: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0273
      <div>
      <Comp_04_1365></Comp_04_1365>';
<Comp_04_1366></Comp_04_1366>';
<Comp_04_1367></Comp_04_1367>';
<Comp_04_1368></Comp_04_1368>';
<Comp_04_1369></Comp_04_1369>';
        </div>
      </div>;
};

export default Comp_03_0273;
