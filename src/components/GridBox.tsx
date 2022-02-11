import { Box, Center, ScaleFade } from '@chakra-ui/react';

export const GridBox = ({ data, answers, d }) => {
  return (
    <Center key={d} w="1000px" h="135px" bg="pink" rounded={'2xl'} shadow="xl">
      <Center fontSize="55px" fontFamily={'noto'}>
        {!data[d] ? (
          <Box
            display="flex"
            flex="row"
            justifyContent={'center'}
            alignItems="center"
            rounded="full"
            bg="blue"
            textColor={'white'}
            boxSize="90px"
          >
            {d}
          </Box>
        ) : null}
        <ScaleFade in={data[d]}>{data[d] ? answers[d] : null}</ScaleFade>
      </Center>
    </Center>
  );
};
