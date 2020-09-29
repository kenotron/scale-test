// Comp_04_1387
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6935 from './Comp_05_6935';
import Comp_05_6936 from './Comp_05_6936';
import Comp_05_6937 from './Comp_05_6937';
import Comp_05_6938 from './Comp_05_6938';
import Comp_05_6939 from './Comp_05_6939';

const Comp_04_1387: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1387
      <div>
      <Comp_05_6935></Comp_05_6935>';
<Comp_05_6936></Comp_05_6936>';
<Comp_05_6937></Comp_05_6937>';
<Comp_05_6938></Comp_05_6938>';
<Comp_05_6939></Comp_05_6939>';
        </div>
      </div>;
};

export default Comp_04_1387;
