// Comp_04_1154
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5770 from './Comp_05_5770';
import Comp_05_5771 from './Comp_05_5771';
import Comp_05_5772 from './Comp_05_5772';
import Comp_05_5773 from './Comp_05_5773';
import Comp_05_5774 from './Comp_05_5774';

const Comp_04_1154: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1154
      <div>
      <Comp_05_5770></Comp_05_5770>';
<Comp_05_5771></Comp_05_5771>';
<Comp_05_5772></Comp_05_5772>';
<Comp_05_5773></Comp_05_5773>';
<Comp_05_5774></Comp_05_5774>';
        </div>
      </div>;
};

export default Comp_04_1154;
