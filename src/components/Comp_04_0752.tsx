// Comp_04_0752
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3760 from './Comp_05_3760';
import Comp_05_3761 from './Comp_05_3761';
import Comp_05_3762 from './Comp_05_3762';
import Comp_05_3763 from './Comp_05_3763';
import Comp_05_3764 from './Comp_05_3764';

const Comp_04_0752: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0752
      <div>
      <Comp_05_3760></Comp_05_3760>';
<Comp_05_3761></Comp_05_3761>';
<Comp_05_3762></Comp_05_3762>';
<Comp_05_3763></Comp_05_3763>';
<Comp_05_3764></Comp_05_3764>';
        </div>
      </div>;
};

export default Comp_04_0752;
