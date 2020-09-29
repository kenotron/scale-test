// Comp_04_1173
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5865 from './Comp_05_5865';
import Comp_05_5866 from './Comp_05_5866';
import Comp_05_5867 from './Comp_05_5867';
import Comp_05_5868 from './Comp_05_5868';
import Comp_05_5869 from './Comp_05_5869';

const Comp_04_1173: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1173
      <div>
      <Comp_05_5865></Comp_05_5865>';
<Comp_05_5866></Comp_05_5866>';
<Comp_05_5867></Comp_05_5867>';
<Comp_05_5868></Comp_05_5868>';
<Comp_05_5869></Comp_05_5869>';
        </div>
      </div>;
};

export default Comp_04_1173;
