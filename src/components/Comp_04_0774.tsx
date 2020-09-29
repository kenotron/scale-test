// Comp_04_0774
import React from 'react';
import { incModCount } from '../modCount';
import Comp_05_3870 from './Comp_05_3870';
import Comp_05_3871 from './Comp_05_3871';
import Comp_05_3872 from './Comp_05_3872';
import Comp_05_3873 from './Comp_05_3873';
import Comp_05_3874 from './Comp_05_3874';

const Comp_04_0774: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_04_0774
      <div>
      <Comp_05_3870></Comp_05_3870>';
<Comp_05_3871></Comp_05_3871>';
<Comp_05_3872></Comp_05_3872>';
<Comp_05_3873></Comp_05_3873>';
<Comp_05_3874></Comp_05_3874>';
        </div>
      </div>;
};

export default Comp_04_0774;
