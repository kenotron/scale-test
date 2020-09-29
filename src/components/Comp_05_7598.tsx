// Comp_05_7598
import React from 'react';
import { incModCount } from '../modCount';


const Comp_05_7598: React.FC = () => {
  React.useEffect(() => {
    incModCount();
  }, []);

  return <div>
    I'm component Comp_05_7598
      <div>
      
        </div>
      </div>;
};

export default Comp_05_7598;
