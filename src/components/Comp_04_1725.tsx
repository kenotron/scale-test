// Comp_04_1725
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8625 from './Comp_05_8625';
import Comp_05_8626 from './Comp_05_8626';
import Comp_05_8627 from './Comp_05_8627';
import Comp_05_8628 from './Comp_05_8628';
import Comp_05_8629 from './Comp_05_8629';

const Comp_04_1725: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1725
      <div>
      <Comp_05_8625></Comp_05_8625>';
<Comp_05_8626></Comp_05_8626>';
<Comp_05_8627></Comp_05_8627>';
<Comp_05_8628></Comp_05_8628>';
<Comp_05_8629></Comp_05_8629>';
        </div>
      </div>;
};

export default Comp_04_1725;
