// Comp_04_0716
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3580 from './Comp_05_3580';
import Comp_05_3581 from './Comp_05_3581';
import Comp_05_3582 from './Comp_05_3582';
import Comp_05_3583 from './Comp_05_3583';
import Comp_05_3584 from './Comp_05_3584';

const Comp_04_0716: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0716
      <div>
      <Comp_05_3580></Comp_05_3580>';
<Comp_05_3581></Comp_05_3581>';
<Comp_05_3582></Comp_05_3582>';
<Comp_05_3583></Comp_05_3583>';
<Comp_05_3584></Comp_05_3584>';
        </div>
      </div>;
};

export default Comp_04_0716;
