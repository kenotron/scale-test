// Comp_04_1076
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5380 from './Comp_05_5380';
import Comp_05_5381 from './Comp_05_5381';
import Comp_05_5382 from './Comp_05_5382';
import Comp_05_5383 from './Comp_05_5383';
import Comp_05_5384 from './Comp_05_5384';

const Comp_04_1076: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1076
      <div>
      <Comp_05_5380></Comp_05_5380>';
<Comp_05_5381></Comp_05_5381>';
<Comp_05_5382></Comp_05_5382>';
<Comp_05_5383></Comp_05_5383>';
<Comp_05_5384></Comp_05_5384>';
        </div>
      </div>;
};

export default Comp_04_1076;
