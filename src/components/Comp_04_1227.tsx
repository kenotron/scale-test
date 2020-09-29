// Comp_04_1227
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6135 from './Comp_05_6135';
import Comp_05_6136 from './Comp_05_6136';
import Comp_05_6137 from './Comp_05_6137';
import Comp_05_6138 from './Comp_05_6138';
import Comp_05_6139 from './Comp_05_6139';

const Comp_04_1227: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1227
      <div>
      <Comp_05_6135></Comp_05_6135>';
<Comp_05_6136></Comp_05_6136>';
<Comp_05_6137></Comp_05_6137>';
<Comp_05_6138></Comp_05_6138>';
<Comp_05_6139></Comp_05_6139>';
        </div>
      </div>;
};

export default Comp_04_1227;
