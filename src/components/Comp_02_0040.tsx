// Comp_02_0040
import React from 'react';
import { incModCount } from '../modCount';
import Comp_03_0200 from './Comp_03_0200';
import Comp_03_0201 from './Comp_03_0201';
import Comp_03_0202 from './Comp_03_0202';
import Comp_03_0203 from './Comp_03_0203';
import Comp_03_0204 from './Comp_03_0204';

const Comp_02_0040: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_02_0040
      <div>
      <Comp_03_0200></Comp_03_0200>';
<Comp_03_0201></Comp_03_0201>';
<Comp_03_0202></Comp_03_0202>';
<Comp_03_0203></Comp_03_0203>';
<Comp_03_0204></Comp_03_0204>';
        </div>
      </div>;
};

export default Comp_02_0040;
