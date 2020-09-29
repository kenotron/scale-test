// Comp_04_1410
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7050 from './Comp_05_7050';
import Comp_05_7051 from './Comp_05_7051';
import Comp_05_7052 from './Comp_05_7052';
import Comp_05_7053 from './Comp_05_7053';
import Comp_05_7054 from './Comp_05_7054';

const Comp_04_1410: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1410
      <div>
      <Comp_05_7050></Comp_05_7050>';
<Comp_05_7051></Comp_05_7051>';
<Comp_05_7052></Comp_05_7052>';
<Comp_05_7053></Comp_05_7053>';
<Comp_05_7054></Comp_05_7054>';
        </div>
      </div>;
};

export default Comp_04_1410;
