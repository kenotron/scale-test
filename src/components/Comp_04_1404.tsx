// Comp_04_1404
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7020 from './Comp_05_7020';
import Comp_05_7021 from './Comp_05_7021';
import Comp_05_7022 from './Comp_05_7022';
import Comp_05_7023 from './Comp_05_7023';
import Comp_05_7024 from './Comp_05_7024';

const Comp_04_1404: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1404
      <div>
      <Comp_05_7020></Comp_05_7020>';
<Comp_05_7021></Comp_05_7021>';
<Comp_05_7022></Comp_05_7022>';
<Comp_05_7023></Comp_05_7023>';
<Comp_05_7024></Comp_05_7024>';
        </div>
      </div>;
};

export default Comp_04_1404;
