// Comp_04_1734
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8670 from './Comp_05_8670';
import Comp_05_8671 from './Comp_05_8671';
import Comp_05_8672 from './Comp_05_8672';
import Comp_05_8673 from './Comp_05_8673';
import Comp_05_8674 from './Comp_05_8674';

const Comp_04_1734: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1734
      <div>
      <Comp_05_8670></Comp_05_8670>';
<Comp_05_8671></Comp_05_8671>';
<Comp_05_8672></Comp_05_8672>';
<Comp_05_8673></Comp_05_8673>';
<Comp_05_8674></Comp_05_8674>';
        </div>
      </div>;
};

export default Comp_04_1734;
