// Comp_04_1037
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5185 from './Comp_05_5185';
import Comp_05_5186 from './Comp_05_5186';
import Comp_05_5187 from './Comp_05_5187';
import Comp_05_5188 from './Comp_05_5188';
import Comp_05_5189 from './Comp_05_5189';

const Comp_04_1037: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1037
      <div>
      <Comp_05_5185></Comp_05_5185>';
<Comp_05_5186></Comp_05_5186>';
<Comp_05_5187></Comp_05_5187>';
<Comp_05_5188></Comp_05_5188>';
<Comp_05_5189></Comp_05_5189>';
        </div>
      </div>;
};

export default Comp_04_1037;
