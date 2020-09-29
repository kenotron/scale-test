// Comp_04_0965
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4825 from './Comp_05_4825';
import Comp_05_4826 from './Comp_05_4826';
import Comp_05_4827 from './Comp_05_4827';
import Comp_05_4828 from './Comp_05_4828';
import Comp_05_4829 from './Comp_05_4829';

const Comp_04_0965: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0965
      <div>
      <Comp_05_4825></Comp_05_4825>';
<Comp_05_4826></Comp_05_4826>';
<Comp_05_4827></Comp_05_4827>';
<Comp_05_4828></Comp_05_4828>';
<Comp_05_4829></Comp_05_4829>';
        </div>
      </div>;
};

export default Comp_04_0965;
