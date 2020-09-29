// Comp_04_1204
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6020 from './Comp_05_6020';
import Comp_05_6021 from './Comp_05_6021';
import Comp_05_6022 from './Comp_05_6022';
import Comp_05_6023 from './Comp_05_6023';
import Comp_05_6024 from './Comp_05_6024';

const Comp_04_1204: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1204
      <div>
      <Comp_05_6020></Comp_05_6020>';
<Comp_05_6021></Comp_05_6021>';
<Comp_05_6022></Comp_05_6022>';
<Comp_05_6023></Comp_05_6023>';
<Comp_05_6024></Comp_05_6024>';
        </div>
      </div>;
};

export default Comp_04_1204;
