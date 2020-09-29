// Comp_04_0852
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4260 from './Comp_05_4260';
import Comp_05_4261 from './Comp_05_4261';
import Comp_05_4262 from './Comp_05_4262';
import Comp_05_4263 from './Comp_05_4263';
import Comp_05_4264 from './Comp_05_4264';

const Comp_04_0852: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0852
      <div>
      <Comp_05_4260></Comp_05_4260>';
<Comp_05_4261></Comp_05_4261>';
<Comp_05_4262></Comp_05_4262>';
<Comp_05_4263></Comp_05_4263>';
<Comp_05_4264></Comp_05_4264>';
        </div>
      </div>;
};

export default Comp_04_0852;
