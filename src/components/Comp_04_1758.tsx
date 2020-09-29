// Comp_04_1758
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8790 from './Comp_05_8790';
import Comp_05_8791 from './Comp_05_8791';
import Comp_05_8792 from './Comp_05_8792';
import Comp_05_8793 from './Comp_05_8793';
import Comp_05_8794 from './Comp_05_8794';

const Comp_04_1758: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1758
      <div>
      <Comp_05_8790></Comp_05_8790>';
<Comp_05_8791></Comp_05_8791>';
<Comp_05_8792></Comp_05_8792>';
<Comp_05_8793></Comp_05_8793>';
<Comp_05_8794></Comp_05_8794>';
        </div>
      </div>;
};

export default Comp_04_1758;
