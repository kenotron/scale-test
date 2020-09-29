// Comp_04_1052
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5260 from './Comp_05_5260';
import Comp_05_5261 from './Comp_05_5261';
import Comp_05_5262 from './Comp_05_5262';
import Comp_05_5263 from './Comp_05_5263';
import Comp_05_5264 from './Comp_05_5264';

const Comp_04_1052: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1052
      <div>
      <Comp_05_5260></Comp_05_5260>';
<Comp_05_5261></Comp_05_5261>';
<Comp_05_5262></Comp_05_5262>';
<Comp_05_5263></Comp_05_5263>';
<Comp_05_5264></Comp_05_5264>';
        </div>
      </div>;
};

export default Comp_04_1052;
