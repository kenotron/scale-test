// Comp_04_1188
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5940 from './Comp_05_5940';
import Comp_05_5941 from './Comp_05_5941';
import Comp_05_5942 from './Comp_05_5942';
import Comp_05_5943 from './Comp_05_5943';
import Comp_05_5944 from './Comp_05_5944';

const Comp_04_1188: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1188
      <div>
      <Comp_05_5940></Comp_05_5940>';
<Comp_05_5941></Comp_05_5941>';
<Comp_05_5942></Comp_05_5942>';
<Comp_05_5943></Comp_05_5943>';
<Comp_05_5944></Comp_05_5944>';
        </div>
      </div>;
};

export default Comp_04_1188;
