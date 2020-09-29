// Comp_04_0938
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4690 from './Comp_05_4690';
import Comp_05_4691 from './Comp_05_4691';
import Comp_05_4692 from './Comp_05_4692';
import Comp_05_4693 from './Comp_05_4693';
import Comp_05_4694 from './Comp_05_4694';

const Comp_04_0938: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0938
      <div>
      <Comp_05_4690></Comp_05_4690>';
<Comp_05_4691></Comp_05_4691>';
<Comp_05_4692></Comp_05_4692>';
<Comp_05_4693></Comp_05_4693>';
<Comp_05_4694></Comp_05_4694>';
        </div>
      </div>;
};

export default Comp_04_0938;
