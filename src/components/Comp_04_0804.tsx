// Comp_04_0804
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4020 from './Comp_05_4020';
import Comp_05_4021 from './Comp_05_4021';
import Comp_05_4022 from './Comp_05_4022';
import Comp_05_4023 from './Comp_05_4023';
import Comp_05_4024 from './Comp_05_4024';

const Comp_04_0804: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0804
      <div>
      <Comp_05_4020></Comp_05_4020>';
<Comp_05_4021></Comp_05_4021>';
<Comp_05_4022></Comp_05_4022>';
<Comp_05_4023></Comp_05_4023>';
<Comp_05_4024></Comp_05_4024>';
        </div>
      </div>;
};

export default Comp_04_0804;
