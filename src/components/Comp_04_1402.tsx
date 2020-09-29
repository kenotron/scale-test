// Comp_04_1402
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7010 from './Comp_05_7010';
import Comp_05_7011 from './Comp_05_7011';
import Comp_05_7012 from './Comp_05_7012';
import Comp_05_7013 from './Comp_05_7013';
import Comp_05_7014 from './Comp_05_7014';

const Comp_04_1402: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1402
      <div>
      <Comp_05_7010></Comp_05_7010>';
<Comp_05_7011></Comp_05_7011>';
<Comp_05_7012></Comp_05_7012>';
<Comp_05_7013></Comp_05_7013>';
<Comp_05_7014></Comp_05_7014>';
        </div>
      </div>;
};

export default Comp_04_1402;
