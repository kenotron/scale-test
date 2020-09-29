// Comp_04_0778
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3890 from './Comp_05_3890';
import Comp_05_3891 from './Comp_05_3891';
import Comp_05_3892 from './Comp_05_3892';
import Comp_05_3893 from './Comp_05_3893';
import Comp_05_3894 from './Comp_05_3894';

const Comp_04_0778: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0778
      <div>
      <Comp_05_3890></Comp_05_3890>';
<Comp_05_3891></Comp_05_3891>';
<Comp_05_3892></Comp_05_3892>';
<Comp_05_3893></Comp_05_3893>';
<Comp_05_3894></Comp_05_3894>';
        </div>
      </div>;
};

export default Comp_04_0778;
