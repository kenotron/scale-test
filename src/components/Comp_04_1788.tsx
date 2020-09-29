// Comp_04_1788
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8940 from './Comp_05_8940';
import Comp_05_8941 from './Comp_05_8941';
import Comp_05_8942 from './Comp_05_8942';
import Comp_05_8943 from './Comp_05_8943';
import Comp_05_8944 from './Comp_05_8944';

const Comp_04_1788: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1788
      <div>
      <Comp_05_8940></Comp_05_8940>';
<Comp_05_8941></Comp_05_8941>';
<Comp_05_8942></Comp_05_8942>';
<Comp_05_8943></Comp_05_8943>';
<Comp_05_8944></Comp_05_8944>';
        </div>
      </div>;
};

export default Comp_04_1788;
