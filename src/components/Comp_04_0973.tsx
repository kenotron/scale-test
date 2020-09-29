// Comp_04_0973
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4865 from './Comp_05_4865';
import Comp_05_4866 from './Comp_05_4866';
import Comp_05_4867 from './Comp_05_4867';
import Comp_05_4868 from './Comp_05_4868';
import Comp_05_4869 from './Comp_05_4869';

const Comp_04_0973: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0973
      <div>
      <Comp_05_4865></Comp_05_4865>';
<Comp_05_4866></Comp_05_4866>';
<Comp_05_4867></Comp_05_4867>';
<Comp_05_4868></Comp_05_4868>';
<Comp_05_4869></Comp_05_4869>';
        </div>
      </div>;
};

export default Comp_04_0973;
