// Comp_04_1004
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5020 from './Comp_05_5020';
import Comp_05_5021 from './Comp_05_5021';
import Comp_05_5022 from './Comp_05_5022';
import Comp_05_5023 from './Comp_05_5023';
import Comp_05_5024 from './Comp_05_5024';

const Comp_04_1004: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1004
      <div>
      <Comp_05_5020></Comp_05_5020>';
<Comp_05_5021></Comp_05_5021>';
<Comp_05_5022></Comp_05_5022>';
<Comp_05_5023></Comp_05_5023>';
<Comp_05_5024></Comp_05_5024>';
        </div>
      </div>;
};

export default Comp_04_1004;
