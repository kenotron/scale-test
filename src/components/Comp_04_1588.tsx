// Comp_04_1588
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7940 from './Comp_05_7940';
import Comp_05_7941 from './Comp_05_7941';
import Comp_05_7942 from './Comp_05_7942';
import Comp_05_7943 from './Comp_05_7943';
import Comp_05_7944 from './Comp_05_7944';

const Comp_04_1588: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1588
      <div>
      <Comp_05_7940></Comp_05_7940>';
<Comp_05_7941></Comp_05_7941>';
<Comp_05_7942></Comp_05_7942>';
<Comp_05_7943></Comp_05_7943>';
<Comp_05_7944></Comp_05_7944>';
        </div>
      </div>;
};

export default Comp_04_1588;
