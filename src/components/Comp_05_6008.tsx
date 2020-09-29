// Comp_05_6008
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_6008: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_6008
      <div>
      
        </div>
      </div>;
};

export default Comp_05_6008;
