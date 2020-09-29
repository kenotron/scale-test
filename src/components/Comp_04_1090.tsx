// Comp_04_1090
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5450 from './Comp_05_5450';
import Comp_05_5451 from './Comp_05_5451';
import Comp_05_5452 from './Comp_05_5452';
import Comp_05_5453 from './Comp_05_5453';
import Comp_05_5454 from './Comp_05_5454';

const Comp_04_1090: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1090
      <div>
      <Comp_05_5450></Comp_05_5450>';
<Comp_05_5451></Comp_05_5451>';
<Comp_05_5452></Comp_05_5452>';
<Comp_05_5453></Comp_05_5453>';
<Comp_05_5454></Comp_05_5454>';
        </div>
      </div>;
};

export default Comp_04_1090;
