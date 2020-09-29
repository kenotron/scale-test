// Comp_04_0802
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4010 from './Comp_05_4010';
import Comp_05_4011 from './Comp_05_4011';
import Comp_05_4012 from './Comp_05_4012';
import Comp_05_4013 from './Comp_05_4013';
import Comp_05_4014 from './Comp_05_4014';

const Comp_04_0802: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0802
      <div>
      <Comp_05_4010></Comp_05_4010>';
<Comp_05_4011></Comp_05_4011>';
<Comp_05_4012></Comp_05_4012>';
<Comp_05_4013></Comp_05_4013>';
<Comp_05_4014></Comp_05_4014>';
        </div>
      </div>;
};

export default Comp_04_0802;
