// Comp_04_1373
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6865 from './Comp_05_6865';
import Comp_05_6866 from './Comp_05_6866';
import Comp_05_6867 from './Comp_05_6867';
import Comp_05_6868 from './Comp_05_6868';
import Comp_05_6869 from './Comp_05_6869';

const Comp_04_1373: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1373
      <div>
      <Comp_05_6865></Comp_05_6865>';
<Comp_05_6866></Comp_05_6866>';
<Comp_05_6867></Comp_05_6867>';
<Comp_05_6868></Comp_05_6868>';
<Comp_05_6869></Comp_05_6869>';
        </div>
      </div>;
};

export default Comp_04_1373;
