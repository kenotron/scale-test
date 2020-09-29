// Comp_04_1774
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_8870 from './Comp_05_8870';
import Comp_05_8871 from './Comp_05_8871';
import Comp_05_8872 from './Comp_05_8872';
import Comp_05_8873 from './Comp_05_8873';
import Comp_05_8874 from './Comp_05_8874';

const Comp_04_1774: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_1774
      <div>
      <Comp_05_8870></Comp_05_8870>';
<Comp_05_8871></Comp_05_8871>';
<Comp_05_8872></Comp_05_8872>';
<Comp_05_8873></Comp_05_8873>';
<Comp_05_8874></Comp_05_8874>';
        </div>
      </div>;
};

export default Comp_04_1774;
