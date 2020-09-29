// Comp_03_0214
import React from 'react';
import { incModCount } from '../modCount';
import Comp_04_1070 from './Comp_04_1070';
import Comp_04_1071 from './Comp_04_1071';
import Comp_04_1072 from './Comp_04_1072';
import Comp_04_1073 from './Comp_04_1073';
import Comp_04_1074 from './Comp_04_1074';

const Comp_03_0214: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_03_0214
      <div>
      <Comp_04_1070></Comp_04_1070>';
<Comp_04_1071></Comp_04_1071>';
<Comp_04_1072></Comp_04_1072>';
<Comp_04_1073></Comp_04_1073>';
<Comp_04_1074></Comp_04_1074>';
        </div>
      </div>;
};

export default Comp_03_0214;
