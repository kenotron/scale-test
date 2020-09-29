// Comp_04_0964
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4820 from './Comp_05_4820';
import Comp_05_4821 from './Comp_05_4821';
import Comp_05_4822 from './Comp_05_4822';
import Comp_05_4823 from './Comp_05_4823';
import Comp_05_4824 from './Comp_05_4824';

const Comp_04_0964: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0964
      <div>
      <Comp_05_4820></Comp_05_4820>';
<Comp_05_4821></Comp_05_4821>';
<Comp_05_4822></Comp_05_4822>';
<Comp_05_4823></Comp_05_4823>';
<Comp_05_4824></Comp_05_4824>';
        </div>
      </div>;
};

export default Comp_04_0964;
