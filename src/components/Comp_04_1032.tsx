// Comp_04_1032
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5160 from './Comp_05_5160';
import Comp_05_5161 from './Comp_05_5161';
import Comp_05_5162 from './Comp_05_5162';
import Comp_05_5163 from './Comp_05_5163';
import Comp_05_5164 from './Comp_05_5164';

const Comp_04_1032: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1032
      <div>
      <Comp_05_5160></Comp_05_5160>';
<Comp_05_5161></Comp_05_5161>';
<Comp_05_5162></Comp_05_5162>';
<Comp_05_5163></Comp_05_5163>';
<Comp_05_5164></Comp_05_5164>';
        </div>
      </div>;
};

export default Comp_04_1032;
