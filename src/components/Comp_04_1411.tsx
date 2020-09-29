// Comp_04_1411
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7055 from './Comp_05_7055';
import Comp_05_7056 from './Comp_05_7056';
import Comp_05_7057 from './Comp_05_7057';
import Comp_05_7058 from './Comp_05_7058';
import Comp_05_7059 from './Comp_05_7059';

const Comp_04_1411: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1411
      <div>
      <Comp_05_7055></Comp_05_7055>';
<Comp_05_7056></Comp_05_7056>';
<Comp_05_7057></Comp_05_7057>';
<Comp_05_7058></Comp_05_7058>';
<Comp_05_7059></Comp_05_7059>';
        </div>
      </div>;
};

export default Comp_04_1411;
