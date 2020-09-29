// Comp_04_1278
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_6390 from './Comp_05_6390';
import Comp_05_6391 from './Comp_05_6391';
import Comp_05_6392 from './Comp_05_6392';
import Comp_05_6393 from './Comp_05_6393';
import Comp_05_6394 from './Comp_05_6394';

const Comp_04_1278: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1278
      <div>
      <Comp_05_6390></Comp_05_6390>';
<Comp_05_6391></Comp_05_6391>';
<Comp_05_6392></Comp_05_6392>';
<Comp_05_6393></Comp_05_6393>';
<Comp_05_6394></Comp_05_6394>';
        </div>
      </div>;
};

export default Comp_04_1278;
