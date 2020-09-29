// Comp_04_0773
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3865 from './Comp_05_3865';
import Comp_05_3866 from './Comp_05_3866';
import Comp_05_3867 from './Comp_05_3867';
import Comp_05_3868 from './Comp_05_3868';
import Comp_05_3869 from './Comp_05_3869';

const Comp_04_0773: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0773
      <div>
      <Comp_05_3865></Comp_05_3865>';
<Comp_05_3866></Comp_05_3866>';
<Comp_05_3867></Comp_05_3867>';
<Comp_05_3868></Comp_05_3868>';
<Comp_05_3869></Comp_05_3869>';
        </div>
      </div>;
};

export default Comp_04_0773;
