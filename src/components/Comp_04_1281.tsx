// Comp_04_1281
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6405 from './Comp_05_6405';
import Comp_05_6406 from './Comp_05_6406';
import Comp_05_6407 from './Comp_05_6407';
import Comp_05_6408 from './Comp_05_6408';
import Comp_05_6409 from './Comp_05_6409';

const Comp_04_1281: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1281
      <div>
      <Comp_05_6405></Comp_05_6405>';
<Comp_05_6406></Comp_05_6406>';
<Comp_05_6407></Comp_05_6407>';
<Comp_05_6408></Comp_05_6408>';
<Comp_05_6409></Comp_05_6409>';
        </div>
      </div>;
};

export default Comp_04_1281;
