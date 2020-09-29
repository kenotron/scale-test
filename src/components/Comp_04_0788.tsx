// Comp_04_0788
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3940 from './Comp_05_3940';
import Comp_05_3941 from './Comp_05_3941';
import Comp_05_3942 from './Comp_05_3942';
import Comp_05_3943 from './Comp_05_3943';
import Comp_05_3944 from './Comp_05_3944';

const Comp_04_0788: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0788
      <div>
      <Comp_05_3940></Comp_05_3940>';
<Comp_05_3941></Comp_05_3941>';
<Comp_05_3942></Comp_05_3942>';
<Comp_05_3943></Comp_05_3943>';
<Comp_05_3944></Comp_05_3944>';
        </div>
      </div>;
};

export default Comp_04_0788;
