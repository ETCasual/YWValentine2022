import { Box, Center, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center key={d} w="600px" h="100px" bg="pink" rounded={'2xl'} shadow="xl">
      <Center fontSize="3vw" fontFamily={'noto'}>
        {!data[d] ? (
          <Box rounded="full" bg="blue" textColor={'white'} boxSize="70px" paddingX="20px">
            {d}
          </Box>
        ) : null}
        <ScaleFade in={data[d]}>{data[d] ? answers[d] : null}</ScaleFade>
      </Center>
    </Center>
  );
};
