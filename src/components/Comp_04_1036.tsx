// Comp_04_1036
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5180 from './Comp_05_5180';
import Comp_05_5181 from './Comp_05_5181';
import Comp_05_5182 from './Comp_05_5182';
import Comp_05_5183 from './Comp_05_5183';
import Comp_05_5184 from './Comp_05_5184';

const Comp_04_1036: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1036
      <div>
      <Comp_05_5180></Comp_05_5180>';
<Comp_05_5181></Comp_05_5181>';
<Comp_05_5182></Comp_05_5182>';
<Comp_05_5183></Comp_05_5183>';
<Comp_05_5184></Comp_05_5184>';
        </div>
      </div>;
};

export default Comp_04_1036;
