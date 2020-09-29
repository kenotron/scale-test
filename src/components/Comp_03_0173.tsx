// Comp_03_0173
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_0865 from './Comp_04_0865';
import Comp_04_0866 from './Comp_04_0866';
import Comp_04_0867 from './Comp_04_0867';
import Comp_04_0868 from './Comp_04_0868';
import Comp_04_0869 from './Comp_04_0869';

const Comp_03_0173: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0173
      <div>
      <Comp_04_0865></Comp_04_0865>';
<Comp_04_0866></Comp_04_0866>';
<Comp_04_0867></Comp_04_0867>';
<Comp_04_0868></Comp_04_0868>';
<Comp_04_0869></Comp_04_0869>';
        </div>
      </div>;
};

export default Comp_03_0173;
