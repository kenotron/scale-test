// Comp_04_1414
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7070 from './Comp_05_7070';
import Comp_05_7071 from './Comp_05_7071';
import Comp_05_7072 from './Comp_05_7072';
import Comp_05_7073 from './Comp_05_7073';
import Comp_05_7074 from './Comp_05_7074';

const Comp_04_1414: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1414
      <div>
      <Comp_05_7070></Comp_05_7070>';
<Comp_05_7071></Comp_05_7071>';
<Comp_05_7072></Comp_05_7072>';
<Comp_05_7073></Comp_05_7073>';
<Comp_05_7074></Comp_05_7074>';
        </div>
      </div>;
};

export default Comp_04_1414;
