// Comp_04_1416
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_7080 from './Comp_05_7080';
import Comp_05_7081 from './Comp_05_7081';
import Comp_05_7082 from './Comp_05_7082';
import Comp_05_7083 from './Comp_05_7083';
import Comp_05_7084 from './Comp_05_7084';

const Comp_04_1416: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1416
      <div>
      <Comp_05_7080></Comp_05_7080>';
<Comp_05_7081></Comp_05_7081>';
<Comp_05_7082></Comp_05_7082>';
<Comp_05_7083></Comp_05_7083>';
<Comp_05_7084></Comp_05_7084>';
        </div>
      </div>;
};

export default Comp_04_1416;
