// Comp_04_0974
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_4870 from './Comp_05_4870';
import Comp_05_4871 from './Comp_05_4871';
import Comp_05_4872 from './Comp_05_4872';
import Comp_05_4873 from './Comp_05_4873';
import Comp_05_4874 from './Comp_05_4874';

const Comp_04_0974: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0974
      <div>
      <Comp_05_4870></Comp_05_4870>';
<Comp_05_4871></Comp_05_4871>';
<Comp_05_4872></Comp_05_4872>';
<Comp_05_4873></Comp_05_4873>';
<Comp_05_4874></Comp_05_4874>';
        </div>
      </div>;
};

export default Comp_04_0974;
