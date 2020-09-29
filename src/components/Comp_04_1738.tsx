// Comp_04_1738
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8690 from './Comp_05_8690';
import Comp_05_8691 from './Comp_05_8691';
import Comp_05_8692 from './Comp_05_8692';
import Comp_05_8693 from './Comp_05_8693';
import Comp_05_8694 from './Comp_05_8694';

const Comp_04_1738: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1738
      <div>
      <Comp_05_8690></Comp_05_8690>';
<Comp_05_8691></Comp_05_8691>';
<Comp_05_8692></Comp_05_8692>';
<Comp_05_8693></Comp_05_8693>';
<Comp_05_8694></Comp_05_8694>';
        </div>
      </div>;
};

export default Comp_04_1738;
