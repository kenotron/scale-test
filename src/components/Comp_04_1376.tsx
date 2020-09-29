// Comp_04_1376
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6880 from './Comp_05_6880';
import Comp_05_6881 from './Comp_05_6881';
import Comp_05_6882 from './Comp_05_6882';
import Comp_05_6883 from './Comp_05_6883';
import Comp_05_6884 from './Comp_05_6884';

const Comp_04_1376: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1376
      <div>
      <Comp_05_6880></Comp_05_6880>';
<Comp_05_6881></Comp_05_6881>';
<Comp_05_6882></Comp_05_6882>';
<Comp_05_6883></Comp_05_6883>';
<Comp_05_6884></Comp_05_6884>';
        </div>
      </div>;
};

export default Comp_04_1376;
