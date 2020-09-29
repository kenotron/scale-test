// Comp_04_1174
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_5870 from './Comp_05_5870';
import Comp_05_5871 from './Comp_05_5871';
import Comp_05_5872 from './Comp_05_5872';
import Comp_05_5873 from './Comp_05_5873';
import Comp_05_5874 from './Comp_05_5874';

const Comp_04_1174: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1174
      <div>
      <Comp_05_5870></Comp_05_5870>';
<Comp_05_5871></Comp_05_5871>';
<Comp_05_5872></Comp_05_5872>';
<Comp_05_5873></Comp_05_5873>';
<Comp_05_5874></Comp_05_5874>';
        </div>
      </div>;
};

export default Comp_04_1174;
