import { motion } from 'framer-motion';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderStyled>
      <h1>Loading....</h1>
      <br />
      <motion.div
        animate={{
          rotate: 360,
          //   borderRadius: ['50% 50%', '2% 50%'],
          x: 75,
        }}
        transition={{
          flip: Infinity,
          duration: 2,
          ease: 'easeInOut',
        }}
        initial={{
          x: -50,
        }}
        style={{
          height: '50px',
          background: '#bde6a4',
          width: '50px',
          borderRadius: '50%',
          border: '3px solid #bde7a4'
        }}
      ></motion.div>
    </LoaderStyled>
  );
};

const LoaderStyled = styled(motion.div)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
      color: #bde6a4;
  }
`;

export default Loader;
