// Comp_04_1388
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6940 from './Comp_05_6940';
import Comp_05_6941 from './Comp_05_6941';
import Comp_05_6942 from './Comp_05_6942';
import Comp_05_6943 from './Comp_05_6943';
import Comp_05_6944 from './Comp_05_6944';

const Comp_04_1388: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1388
      <div>
      <Comp_05_6940></Comp_05_6940>';
<Comp_05_6941></Comp_05_6941>';
<Comp_05_6942></Comp_05_6942>';
<Comp_05_6943></Comp_05_6943>';
<Comp_05_6944></Comp_05_6944>';
        </div>
      </div>;
};

export default Comp_04_1388;
