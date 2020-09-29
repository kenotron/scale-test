// Comp_04_0952
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4760 from './Comp_05_4760';
import Comp_05_4761 from './Comp_05_4761';
import Comp_05_4762 from './Comp_05_4762';
import Comp_05_4763 from './Comp_05_4763';
import Comp_05_4764 from './Comp_05_4764';

const Comp_04_0952: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0952
      <div>
      <Comp_05_4760></Comp_05_4760>';
<Comp_05_4761></Comp_05_4761>';
<Comp_05_4762></Comp_05_4762>';
<Comp_05_4763></Comp_05_4763>';
<Comp_05_4764></Comp_05_4764>';
        </div>
      </div>;
};

export default Comp_04_0952;
