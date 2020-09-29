// Comp_04_1396
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6980 from './Comp_05_6980';
import Comp_05_6981 from './Comp_05_6981';
import Comp_05_6982 from './Comp_05_6982';
import Comp_05_6983 from './Comp_05_6983';
import Comp_05_6984 from './Comp_05_6984';

const Comp_04_1396: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1396
      <div>
      <Comp_05_6980></Comp_05_6980>';
<Comp_05_6981></Comp_05_6981>';
<Comp_05_6982></Comp_05_6982>';
<Comp_05_6983></Comp_05_6983>';
<Comp_05_6984></Comp_05_6984>';
        </div>
      </div>;
};

export default Comp_04_1396;
