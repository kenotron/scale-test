// Comp_04_1424
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7120 from './Comp_05_7120';
import Comp_05_7121 from './Comp_05_7121';
import Comp_05_7122 from './Comp_05_7122';
import Comp_05_7123 from './Comp_05_7123';
import Comp_05_7124 from './Comp_05_7124';

const Comp_04_1424: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1424
      <div>
      <Comp_05_7120></Comp_05_7120>';
<Comp_05_7121></Comp_05_7121>';
<Comp_05_7122></Comp_05_7122>';
<Comp_05_7123></Comp_05_7123>';
<Comp_05_7124></Comp_05_7124>';
        </div>
      </div>;
};

export default Comp_04_1424;
