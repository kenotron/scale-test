// Comp_04_1027
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5135 from './Comp_05_5135';
import Comp_05_5136 from './Comp_05_5136';
import Comp_05_5137 from './Comp_05_5137';
import Comp_05_5138 from './Comp_05_5138';
import Comp_05_5139 from './Comp_05_5139';

const Comp_04_1027: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1027
      <div>
      <Comp_05_5135></Comp_05_5135>';
<Comp_05_5136></Comp_05_5136>';
<Comp_05_5137></Comp_05_5137>';
<Comp_05_5138></Comp_05_5138>';
<Comp_05_5139></Comp_05_5139>';
        </div>
      </div>;
};

export default Comp_04_1027;
