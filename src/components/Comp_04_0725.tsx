// Comp_04_0725
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3625 from './Comp_05_3625';
import Comp_05_3626 from './Comp_05_3626';
import Comp_05_3627 from './Comp_05_3627';
import Comp_05_3628 from './Comp_05_3628';
import Comp_05_3629 from './Comp_05_3629';

const Comp_04_0725: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0725
      <div>
      <Comp_05_3625></Comp_05_3625>';
<Comp_05_3626></Comp_05_3626>';
<Comp_05_3627></Comp_05_3627>';
<Comp_05_3628></Comp_05_3628>';
<Comp_05_3629></Comp_05_3629>';
        </div>
      </div>;
};

export default Comp_04_0725;
